$("#addTaskButton").click(function addTask() {
    if ($("#taskContent").val() != "") {
        $("#todoListContainer").append(`
    <div class="todoTask1 todoTask">
    <div class="todoTask__title">
        <div class="checkBox"></div>
        <span class="todoTaskTitle">${$("#taskContent").val()}</span>
    </div>
    <div class="todoTask__control">
    <img class="bin" src="./img/trash.png" alt="delete">
    </div>
    </div>`);
        $("#taskContent").val("");
        $(".bin").click(function () {
            $(this).closest(".todoTask").hide(200);
        })
        $(".checkBox").click(function (e) {
            e.target.textContent = "✔";
            e.target.closest(".todoTask").style.opacity = 0.5;
        });
    }
});
document.onkeydown = function (e) {
    if (e.key == "Enter") {
        if ($("#taskContent").val() != "") {
            $("#todoListContainer").append(`
        <div class="todoTask1 todoTask">
        <div class="todoTask__title">
            <div class="checkBox"></div>
            <span class="todoTaskTitle">${$("#taskContent").val()}</span>
        </div>
        <div class="todoTask__control">
        <img class="bin" src="./img/trash.png" alt="delete">
        </div>
        </div>`);
            $("#taskContent").val("");
            $(".bin").click(function () {
                $(this).closest(".todoTask").hide(200);
            })
            $(".checkBox").click(function (e) {
                e.target.textContent = "✔";
                e.target.closest(".todoTask").style.opacity = 0.5;
            });
        }
    }
}