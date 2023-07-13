const sampleNumberInput = document.getElementById("sampleNumberInput");
const sampleNameInputs = document.querySelectorAll(".sample-name");
const indexNameInputs = document.querySelectorAll(".index-name");

sampleNumberInput.addEventListener("input", function () {
    const sampleNumber = parseInt(sampleNumberInput.value);
    const maxSampleNumber = parseInt(sampleNumberInput.getAttribute("max"));

    if (isNaN(sampleNumber) || sampleNumber < 1 || sampleNumber > maxSampleNumber) {
        sampleNumberInput.value = "";
        return;
    }

    // Disable excess sample name inputs
    sampleNameInputs.forEach(function (input, index) {
        if (index >= sampleNumber) {
            input.value = "";
            input.disabled = true;
            input.classList.add("disabled");
        } else {
            input.disabled = false;
            input.classList.remove("disabled");
        }
    });

    // Disable excess index name inputs
    indexNameInputs.forEach(function (input, index) {
        if (index >= sampleNumber) {
            input.value = "";
            input.disabled = true;
            input.classList.add("disabled");
        } else {
            input.disabled = false;
            input.classList.remove("disabled");
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var leftButton = document.getElementById('leftButton');
    var rightButton = document.getElementById('rightButton');

    function updateButtonState() {
        var allChecked = true;
        checkboxes.forEach(function (checkbox) {
            if (!checkbox.checked) {
                allChecked = false;
            }
        });

        if (allChecked) {
            leftButton.classList.add('blue-button');
            rightButton.classList.add('blue-button');
            leftButton.disabled = false;
            rightButton.disabled = false;
        } else {
            leftButton.classList.remove('blue-button');
            rightButton.classList.remove('blue-button');
            leftButton.disabled = true;
            rightButton.disabled = true;
        }
    }

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', updateButtonState);
    });
});