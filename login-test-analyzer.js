const testCases = [
    { name: "Valid Login", status: "Passed", priority: "High" },
    { name: "Invalid Password", status: "Passed", priority: "High" },
    { name: "Empty Username", status: "Failed", priority: "Medium" },
    { name: "Locked Account", status: "Failed", priority: "High" },
    { name: "Login Performance", status: "Passed", priority: "Medium" }
];

function analyzeTests(testCases) {8
    let passedCount = 0;
    let failedCount = 0;
888
    for (const testCase of testCases) {
        if (testCase.status === "Passed") {
            passedCount++;
        } else if (testCase.status === "Failed") {
            failedCount++;
        }
    }

    return {
        total: testCases.length,
        passed: passedCount,
        failed: failedCount
    };
}

const { total, passed, failed } = analyzeTests(testCases);

console.log("Total Tests:", total);
console.log("Passed Tests:", passed);
console.log("Failed Tests:", failed);

const failedTestNames = testCases
    .filter(testCase => testCase.status === "Failed")
    .map(testCase => testCase.name);

console.log("Failed Test Cases:", failedTestNames);