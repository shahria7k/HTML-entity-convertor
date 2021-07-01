function convertHTML(str) {
	let entities = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"'": "&apos;",
	};
	return str
		.split("")
		.map((item) => {
			return /[^\w\s\/=#]/g.test(item)
				? item.replace(/[^\w\s\/=#]/g, entities[item])
				: item;
		})
		.join("");
}
