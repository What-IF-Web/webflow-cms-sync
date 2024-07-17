const { marked } = require("marked");

const generateRealIndex = (index, start = true) => {
	const no_of_times = Math.floor(index / 100);
	if (index < 100 || (!start && index % 100 === 0)) {
		return index;
	} else {
		return index - no_of_times * 100;
	}
};

async function executeWithTiming(func) {
	const startTime = Date.now();
	await func();
	const endTime = Date.now();
	const executionTime = endTime - startTime;
	console.log(`Function took ${executionTime / 1000} seconds to execute.`);
}

function filterExcessItemsToDelete(arr1, arr2, key1, key2) {
	const slugSet = new Set(arr2.map((obj) => obj?.fields?.[key2]));
	return arr1.filter((obj) => !slugSet.has(obj?.fieldData?.[key1]));
}

function convertMarkdownToHtml(input) {
	// Basic check for Markdown syntax (headers, links, emphasis, lists)
	const markdownPattern = /[#*_\[\]]/;

	return marked(input);

	// // If the input matches the pattern, assume it's Markdown
	// if (markdownPattern.test(input)) {
	// 	// Use the marked library to convert Markdown to HTML
	// 	return marked(input);
	// } else {
	// 	// If no Markdown syntax is found, return the original string
	// 	return input;
	// }
}

module.exports = {
	generateRealIndex,
	executeWithTiming,
	filterExcessItemsToDelete,
	convertMarkdownToHtml,
};
