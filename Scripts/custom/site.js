$("#AddMore").click(function () {
    let developers = $("#DeveloperCount").val();
    developers++;
    $("#NewDevelopers").append(
        `
        <div class="mb-3 row"><span class="bg-light p-2">Developer # ` + (developers) + `</span></div>
        <div class="mb-3 row">
            <label class="control-label col-md-2" for="Name">Name</label>
            <div class="col-md-10">
                <input class="form-control text-box single-line" id="Name` + developers + `" name="Name" type="text" value="" data-val="true" data-val-required="This field is required" />
                <span class="d-none">This field is required</span>
            </div>
        </div>
        <div class="mb-3 row">
            <label class="control-label col-md-2" for="Age">Age</label>
            <div class="col-md-10">
                <input class="form-control text-box single-line" id="Age` + developers + `" name="Age" type="number" value="" />
                <span class="d-none">This field is required</span>
            </div>
        </div>

        <div class="mb-3 row">
            <label class="control-label col-md-2" for="JobTitle">Job Title</label>
            <div class="col-md-10">
                <input class="form-control text-box single-line" id="JobTitle` + developers + `" name="JobTitle" type="text" value="" />
                <span class="d-none">This field is required</span>
            </div>
        </div>
        `
    );
    $("#DeveloperCount").val(developers);
});