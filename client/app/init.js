import { Render } from "./render.js";

const tablesContainer = document.getElementById("main-header");
const tableHeader = document.getElementById("tableHeader");

/* 
	on page load, the following code will run(Albums is the default table)

*/
window.onload = function () {
	let render = new Render();
	countAllTables();

	fetchTablesByPage(1);

	async function countAllTables() {
		const res = await fetch("/api/Albums/count");

		if (!res.ok || res.status !== 200) {
			console.log(`Data fetch error: ${res.status}`);
			return;
		}

		const data = await res.json();
		render.renderTotalQty(data, fetchTablesByPage);
	}

	async function fetchTableList() {
		const res = await fetch("/api/Albums");

		if (!res.ok || res.status !== 200) {
			console.log(`Data fetch error: ${res.status}`);
			return;
		}

		const data = await res.json();

		render.renderTableList(data);
	}

	async function fetchTablesById() {
		const res = await fetch("/api/Albums/2");

		if (!res.ok || res.status !== 200) {
			console.log(`Data fetch error: ${res.status}`);
			return;
		}

		console.log(res);

		const data = await res.json();

		document.getElementById("root");

		console.log("Name of a Album #2: " + data.Title);
	}

	async function fetchTablesByPage(page) {
		const res = await fetch(`api/Albums/pagination/${page}`);

		if (!res.ok || res.status !== 200) {
			console.log(`Fetch error on page ${page}: ${res.status}`);
		}

		const data = await res.json();

		render.renderTableList(data);
	}
};
// run the following code after clicking the table name

tablesContainer.onclick = function (event) {
	let render = new Render();
	let exactTable = event.target.textContent;
	console.log("textContent: ", exactTable);
	tableHeader.textContent = `${exactTable}`;
	countAllTables();
	fetchTablesByPage(1);
	async function countAllTables() {
		const res = await fetch(`/api/${exactTable}/count`);

		if (!res.ok || res.status !== 200) {
			console.log(`Data fetch error count: ${res.status}`);
			return;
		}

		const data = await res.json();
		render.renderTotalQty(data, fetchTablesByPage);
	}
	/* 
		fetch table list

*/
	async function fetchTableList() {
		const res = await fetch(`/api/${exactTable}`);

		if (!res.ok || res.status !== 200) {
			console.log(`Data fetch error fetch table: ${res.status}`);
			return;
		}

		const data = await res.json();

		render.renderTableList(data);
	}
	/* 
		fetch table by id

	*/
	async function fetchTableById() {
		const res = await fetch(`/api/${exactTable}/2`);

		if (!res.ok || res.status !== 200) {
			console.log(`Data fetch error: ${res.status}`);
			return;
		}

		console.log(res);

		const data = await res.json();

		document.getElementById("root");
		/* 
		fetch table by page

		*/
		console.log("Name of a Album #2: " + data.Title);
	}

	async function fetchTablesByPage(page) {
		const res = await fetch(`api/${exactTable}/pagination/${page}`);

		if (!res.ok || res.status !== 200) {
			console.log(`Fetch error on page ${page}: ${res.status}`);
		}

		const data = await res.json();

		render.renderTableList(data);
	}
};
