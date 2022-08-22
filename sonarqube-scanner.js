const scanner = require('sonarqube-scanner');
scanner(
    {
        serverUrl: "http://localhost:9000",
        token:"squ_e545f59d374c4b04a60f1186fa3f23c4d8f2c9bf",
        options: {
            "sonar.sources": "./src",
            "sonar.exclusions": "**/*.test.tsx",
            "sonar.tests": "./src",
            "sonar.test.inclusions": "**/*.test.tsx,**/*.test.ts",
        },
    },
    () => process.exit()
);