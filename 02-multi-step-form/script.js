const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

const allSteps = document.querySelectorAll("#progress-container .step-container");
const totalSteps = allSteps.length;

const updateActiveStep = (nextStep) => {
    const nextStepElIndex = nextStep - 1;
    allSteps[nextStepElIndex].classList.add("active");
    // Remove active class from all steps after the next step
    for (let i = nextStepElIndex + 1; i < allSteps.length; i++) {
        allSteps[i].classList.remove("active");
    }
};

const updateProgress = (completedSteps) => {
    const totalProgessBars = totalSteps - 1;
    const progessPercentage = (completedSteps / totalProgessBars) * 100;
    const progessEl = document.getElementById("progress");
    progessEl.style.width = `${progessPercentage}%`;
};

const getCurrentActiveStep = () => {
    let currentActiveStep = 1;
    allSteps.forEach((step, i) => {
        const stepNo = i + 1;
        const isActive = step.classList.contains("active");
        if (isActive) {
            currentActiveStep = stepNo;
        }
    });
    return currentActiveStep;
};

const toggleNavBtns = (allSteps, newActiveStep) => {
    if (newActiveStep == 1) {
        prevBtn.setAttribute("disabled", true);
        return;
    }
    prevBtn.removeAttribute("disabled");
    if (newActiveStep == allSteps.length) {
        nextBtn.setAttribute("disabled", true);
        return;
    }
    nextBtn.removeAttribute("disabled");
};

const updateNavigation = (type) => {
    const currentActiveStep = getCurrentActiveStep();
    let nextStep;
    switch (type) {
        case "next":
            nextStep = currentActiveStep + 1;
            break;
        case "previous":
            nextStep = currentActiveStep - 1;
            break;
        default:
            throw new Error(`Invalid navigation type: ${type}`);
    }
    toggleNavBtns(allSteps, nextStep);
    updateActiveStep(nextStep);
    updateProgress(nextStep - 1);
};

nextBtn.onclick = () => updateNavigation("next");
prevBtn.onclick = () => updateNavigation("previous");
