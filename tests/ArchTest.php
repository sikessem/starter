<?php

declare(strict_types=1);

test('globals')
    ->expect(['dd', 'dump', 'ray'])
    ->not->toBeUsed();

test('classes')
    ->expect('My')
    ->toUseStrictTypes();

test('contracts')
    ->expect('My\Contracts')
    ->interfaces()
    ->toOnlyBeUsedIn('My', 'My\Contracts');

test('concerns')
    ->expect('My\Concerns')
    ->traits()
    ->toOnlyBeUsedIn('My', 'My\Concerns');
