import fs from "node:fs";
import { homedir } from "node:os";
import { resolve } from "node:path";
import laravel, { refreshPaths } from "laravel-vite-plugin";
import { ServerOptions, defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "");
    const host = env.VITE_CONFIG_SERVER_HOST ?? "localhost";
    const base = env.VITE_CONFIG_SERVER_BASE ?? "/";
    const port = Number(env.VITE_CONFIG_SERVER_PORT ?? 4000);
    const root = env.VITE_CONFIG_SERVER_ROOT;
    const buildDirectory = env.VITE_CONFIG_BUILD_DIRECTORY ?? "static";

    return {
        server: detectServerConfig({ host, port, base }),
        base,
        root,
        plugins: [
            laravel({
                input: [
                    "app/res/assets/styles/app.css",
                    "app/res/assets/scripts/app.ts",
                ],
                refresh: [
                    ...refreshPaths,
                    "app/res/views/**",
                    "app/src/Views/**",
                ],
                buildDirectory,
            }),
            tsconfigPaths(),
        ],
        preview: {
            headers: {
                "Cache-Control": "public, max-age=600",
            },
        },
        resolve: {
            alias: {
                "@assets": "app/res/assets",
                "@images": "app/res/assets/images",
                "@scripts": "app/res/assets/scripts",
                "@styles": "app/res/assets/styles",
                "@types": "app/res/assets/types",
            },
        },
    };
});

function detectServerConfig(opts: {
    host: string | undefined;
    port: number | undefined;
    base: string | undefined;
}): ServerOptions {
    const keyPath = resolve(
        homedir(),
        `.config/valet/Certificates/${opts.host}.key`,
    );
    const certificatePath = resolve(
        homedir(),
        `.config/valet/Certificates/${opts.host}.crt`,
    );

    if (!fs.existsSync(keyPath) || !fs.existsSync(certificatePath)) {
        return opts;
    }

    return {
        hmr: {
            host: opts.host,
            port: opts.port,
        },
        https: {
            key: fs.readFileSync(keyPath),
            cert: fs.readFileSync(certificatePath),
        },
        ...opts,
    };
}
