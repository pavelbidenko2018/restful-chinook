export class Render {
	renderTotalQty = (qty, fetchTablesByPage) => {
		const albumsTableTotalQty = $("#tableHeader");
		const span = $("<span></span>").text(`  ${qty}`);

		albumsTableTotalQty.append(span);

		let numberOfPages = Math.floor(qty / 10);
		const restOfItems = qty - numberOfPages * 10;
		if (restOfItems > 0) {
			numberOfPages += 1;
		}

		const ul = $("#pageCounter");
		ul.empty();
		for (let i = 1; i <= numberOfPages; i++) {
			let li = $("<li></li>")
				.text(`${i}`)
				.click(() => fetchTablesByPage(`${i}`));

			ul.append(li);
		}
	};

	renderTableList = (tableList) => {
		const table = $("#tableList");
		table.empty();
		/* 
			store the first two columns name in the array called tableInfo
			use the columns name for table header and to find the content of that columns
		
		*/
		let tableInfo = [];
		tableList.forEach((item, index, arr) => {
			let one = Object.keys(arr[index])[0];
			tableInfo.push(one);
			let two = Object.keys(arr[index])[1];
			tableInfo.push(two);
			return;
		});
		table.append(
			$("<thead></thead>").append(
				$("<tr></tr>").append(
					$("<th></th>").attr("scope", "col").text(`${tableInfo[0]}`),
					$("<th></th>").attr("scope", "col").text(`${tableInfo[1]}`)
				)
			)
		);

		const tbody = $("<tbody></tbody>");
		table.append(tbody);

		tableList.forEach((item, index, arr) => {
			tbody.append(
				$("<tr></tr>").append(
					$("<td></td>").text(item[`${tableInfo[0]}`]),
					$("<td></td>").text(item[`${tableInfo[1]}`])
				)
			);
		});
	};
}
