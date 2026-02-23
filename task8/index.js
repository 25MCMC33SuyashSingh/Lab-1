let books = [];

$(document).ready(function () {

    $.ajax({
        type: "GET",
        url: "books.xml",
        dataType: "xml",
        success: function (xml) {

            $(xml).find("book").each(function () {

                let book = {
                    title: $(this).find("title").text(),
                    author: $(this).find("author").text(),
                    genre: $(this).find("genre").text(),
                    price: parseInt($(this).find("price").text()),
                    date: $(this).find("date").text()
                };

                books.push(book);
            });

            displayBooks(books);
        }
    });

    $("#genreFilter, #authorFilter, #priceFilter").on("change keyup", function () {
        applyFilters();
    });

});

function displayBooks(data) {

    let rows = "";

    $.each(data, function (i, book) {
        rows += `
            <tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.genre}</td>
                <td>${book.price}</td>
                <td>${book.date}</td>
            </tr>
        `;
    });

    $("#bookTable tbody").html(rows);
}

function applyFilters() {

    let genre = $("#genreFilter").val();
    let author = $("#authorFilter").val().toLowerCase();
    let priceRange = $("#priceFilter").val();

    let filtered = books.filter(book => {

        let genreMatch = (genre === "all" || book.genre === genre);
        let authorMatch = book.author.toLowerCase().includes(author);

        let priceMatch = true;

        if (priceRange === "0-300")
            priceMatch = book.price < 300;
        else if (priceRange === "300-500")
            priceMatch = book.price >= 300 && book.price <= 500;
        else if (priceRange === "500+")
            priceMatch = book.price > 500;

        return genreMatch && authorMatch && priceMatch;
    });

    displayBooks(filtered);
}