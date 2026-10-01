const fs = require('fs');
const path = require('path');

function replaceInFile(filePath, replacements) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    for (const { search, replace } of replacements) {
        if (content.includes(search) || (search instanceof RegExp && search.test(content))) {
            content = content.replace(search, replace);
            changed = true;
        }
    }
    if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${filePath}`);
    }
}

const basePath = path.join(__dirname, 'src');

// 1. Fix unused React and type-only ReactNode imports
const filesWithReactNode = [
    'layouts/GlobalLayout.tsx',
    'providers/AnimationProvider.tsx',
    'providers/FirebaseProvider.tsx',
    'providers/StoreProvider.tsx',
    'providers/ThemeProvider.tsx'
];
filesWithReactNode.forEach(f => {
    replaceInFile(path.join(basePath, f), [
        { search: "import React, { ReactNode } from 'react';", replace: "import type { ReactNode } from 'react';" },
        { search: "import { ReactNode } from 'react';", replace: "import type { ReactNode } from 'react';" }
    ]);
});

const filesWithReact = [
    'components/illustrations/AIIllustration.tsx',
    'components/illustrations/EchoCardIllustration.tsx',
    'components/navigation/BottomNavigation.tsx',
    'components/ui/Avatar.tsx',
    'components/ui/Card.tsx',
    'components/ui/Chip.tsx',
    'components/ui/Statistic.tsx',
    'pages/Onboarding.tsx'
];
filesWithReact.forEach(f => {
    replaceInFile(path.join(basePath, f), [
        { search: "import React from 'react';\n", replace: "" },
        { search: "import React, { forwardRef } from 'react';", replace: "import { forwardRef } from 'react';" },
        { search: "import React, { forwardRef, useEffect, useState } from 'react';", replace: "import { forwardRef, useEffect, useState } from 'react';" },
        { search: "import React, { useState } from 'react';", replace: "import { useState } from 'react';" }
    ]);
});

// 2. Fix Avatar unused sizeClasses
replaceInFile(path.join(basePath, 'components/ui/Avatar.tsx'), [
    { search: "const sizeClasses: Record<AvatarSize, string> = {\n      sm: 'w-10 h-10',\n      md: 'w-16 h-16',\n      lg: 'w-24 h-24',\n      hero: 'w-40 h-40',\n    };", replace: "" }
]);

// 3. Fix Header types and motion children
replaceInFile(path.join(basePath, 'components/ui/Header.tsx'), [
    { search: "title?: string;", replace: "title?: React.ReactNode;" },
    { search: "{title || children}", replace: "{(title || children) as React.ReactNode}" }
]);

// 4. Fix SuggestedQuestions type error
replaceInFile(path.join(basePath, 'components/ui/ai/SuggestedQuestions.tsx'), [
    { search: "export interface SuggestedQuestionsProps extends HTMLMotionProps<'div'> {", replace: "export interface SuggestedQuestionsProps extends Omit<HTMLMotionProps<'div'>, 'onSelect'> {" }
]);

// 5. Fix Chip motion children error
replaceInFile(path.join(basePath, 'components/ui/Chip.tsx'), [
    { search: "{children}", replace: "{children as any}" }
]);

console.log("Done");
