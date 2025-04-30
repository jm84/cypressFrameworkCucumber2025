const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: 'cypress/cucumberReports', // Ruta donde se encuentran los archivos JSON generados por Cucumber
    reportPath: 'cypress/cucumber-html-report', // Ruta donde se generará el reporte HTML
    metadata: {
        browser: {
            name: 'chrome',
            version: 'latest'
        },
        device: 'Local Machine',
        platform: {
            name: 'windows',
            version: '11'
        }
    },
    customData: {
        title: 'Run Info',
        data: [
            { label: 'Project', value: 'Cypress Cucumber Project' },
            { label: 'Release', value: '1.0.0' },
            { label: 'Execution Date', value: new Date().toLocaleString() }
        ]
    }
});