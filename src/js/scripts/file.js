document.addEventListener('DOMContentLoaded', () => {

    const selectContent = document.querySelector('.__select__content');
    console.log(selectContent);
    initBuildProgress(selectContent);

});

function initBuildProgress(selectContent) {

    console.log(1111);

    let archives = [];

    getArchives()
        .then(async response => {
            archives = await response.json();

            console.log(archives);
            
            getPhotosWithDate(archives[0])
                .then(async response => {
                    data = await response.json();
                    console.log(data);
                    // console.log(JSON.parse(response));
                });
        });
    // console.log(archives);
    // let initYear = getPhotosWithDate(archives[0]);
    // console.log(archives);
    // archives.forEach((elem) => {
    //     console.log(elem);
    // });

}

function getArchives() {
    return fetch('/api_fs.php', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "action": "getArchives"
        })
    });
}

function getPhotosWithDate(year) {
    return fetch('/api_fs.php', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "action": "getPhotosWithDate",
            "year": year
        })
    });
}
