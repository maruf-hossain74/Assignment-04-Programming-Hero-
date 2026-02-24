let jobs = [
    {
        company: "Mobile First Corp",
        position: "React Native Developer",
        location: "Remote",
        type: "Full-Time",
        salary: "$130,000 - $175,000",
        description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
        status: "all"
    },
    {
        company: "WebFlow Agency",
        position: "Web Designer & Developer",
        location: "Los Angeles, CA",
        type: "Part-Time",
        salary: "$80,000 - $120,000",
        description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
        status: "all"
    },
    {
        company: "DataViz Solutions",
        position: "Data Visualization Specialist",
        location: "Boston, MA",
        type: "Hybrid",
        salary: "$125,000 - $165,000",
        description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
        status: "all"
    },
    {
        company: "CloudFirst Inc",
        position: "Backend Developer",
        location: "Seattle, WA",
        type: "Full-Time",
        salary: "$140,000 - $190,000",
        description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
        status: "all"
    },
    {
        company: "Innovation Labs",
        position: "UI/UX Engineer",
        location: "Austin, TX",
        type: "Full-time",
        salary: "$110,000 - $150,000",
        description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
        status: "all"
    },
    {
        company: "MegaCorp Solutions",
        position: "JavaScript Developer",
        location: "New York, NY",
        type: "Full-Time",
        salary: "$130,000 - $170,000",
        description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
        status: "all"
    },
    {
        company: "StartupXYZ",
        position: "Full Stack Engineer",
        location: "Remote",
        type: "Full-time",
        salary: "$120,000 - $160,000",
        description: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
        status: "all"
    },
    {
        company: "TechCorp Industries",
        position: "Senior Frontend Developer",
        location: "San Francisco, CA",
        type: "Full-Time",
        salary: "$130,000 - $175,000",
        description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
        status: "all"
    }
];
let currentTab = "all";

function renderJobs() {
    const container = document.getElementById("jobContainer");
    container.innerHTML = "";

    let filteredJobs;

    if(currentTab === "all") filteredJobs = jobs;
    else filteredJobs = jobs.filter(job => job.status === currentTab);

    if(filteredJobs.length === 0) {
        container.innerHTML = `
            <div class="col-span-2 text-center py-16 w-[1110px] h-[400px] bg-white">
            <img src="jobs.png" alt="No Jobs" class="w-24 mx-auto mb-4 opacity-70">
            <p class="text-lg font-semibold">No Jobs Available</p>
            <p class="text-gray-500">Check back soon for new job opportunities</p>
        </div>`;
        updateCounts();
        updateActiveTabUI();
        return;
    }

    filteredJobs.forEach((job) => {
        const realIndex = jobs.indexOf(job);

        container.innerHTML += `
        <div class="bg-white p-6 rounded-xl shadow relative">
            <button onclick="deleteJob(${realIndex})" class="absolute top-4 right-4 text-[#64748B] border border-gray-200 rounded-[50%] bg-white"> <i class="fa-solid fa-trash"></i> </button>
            <h3 class="font-bold">${job.company}</h3>
            <p class="font-semibold">${job.position}</p>
            <p class="text-sm text-gray-500"> ${job.location} • ${job.type} • ${job.salary} </p>
            ${renderStatusBadge(job.status)}
            <p class="text-sm mt-2">${job.description}</p>
            <div class="flex gap-3 mt-4">
                <button 
                    onclick="setStatus(${realIndex}, 'interview')" 
                    class="px-3 py-1 border rounded 
                    ${job.status === 'interview'? 'bg-green-100 text-green-600 border-green-600' : 'border-green-600 text-green-600'}">
                    Interview
                </button>

                <button 
                    onclick="setStatus(${realIndex}, 'rejected')" 
                    class="px-3 py-1 border rounded 
                    ${job.status === 'rejected' ? 'bg-red-100 text-red-600 border-red-600' : 'border-red-600 text-red-600'}">
                    Rejected
                </button>
            </div>

        </div>`;
    });

    updateCounts();
    updateActiveTabUI();
}

function renderStatusBadge(status) {
    if(status === "interview") return `<div class="mt-3 inline-block bg-green-100 text-green-600 px-2 py-1 rounded text-sm">Interview</div>`;
    if(status === "rejected") return `<div class="mt-3 inline-block bg-red-100 text-red-600 px-2 py-1 rounded text-sm">Rejected</div>`;
    return `<div class="mt-3 inline-block bg-gray-100 text-gray-500 px-2 py-1 rounded text-sm disable">Not Selected</div>`;
    //return;
}

function setStatus(index, status) {
    if(jobs[index].status === status) jobs[index].status = "none";
    else jobs[index].status = status;
    renderJobs();
}

function deleteJob(index) {
    jobs.splice(index, 1);
    renderJobs();
}

function updateActiveTabUI() {
    const allBtn = document.getElementById("allBtn");
    const interviewBtn = document.getElementById("interviewBtn");
    const rejectBtn = document.getElementById("rejectBtn");

    [allBtn, interviewBtn, rejectBtn].forEach(btn => {
        btn.classList.remove("bg-blue-500", "text-white");
        btn.classList.add("bg-white", "text-gray-500");
    });

    if(currentTab === "all") {
        allBtn.classList.remove("bg-white", "text-gray-500");
        allBtn.classList.add("bg-blue-500", "text-white");
    }
    if(currentTab === "interview") {
        interviewBtn.classList.remove("bg-white", "text-gray-500");
        interviewBtn.classList.add("bg-blue-500", "text-white");
    }
    if(currentTab === "rejected") {
        rejectBtn.classList.remove("bg-white", "text-gray-500");
        rejectBtn.classList.add("bg-blue-500", "text-white");
    }
}

function updateCounts() {
    const total = jobs.length;
    const interview = jobs.filter(j => j.status === "interview").length;
    const rejected = jobs.filter(j => j.status === "rejected").length;

    document.getElementById("totalCount").innerText = total;
    document.getElementById("interviewCount").innerText = interview;
    document.getElementById("rejectCount").innerText = rejected;

    let sectionText = "";
    if(currentTab === "all") sectionText = `Total: ${total} Jobs`;
    if(currentTab === "interview") sectionText = `${interview} of ${total} Jobs`;
    if(currentTab === "rejected") sectionText = `${rejected} of ${total} Jobs`;

    document.getElementById("sectionCount").innerText = sectionText;
    document.getElementById("allTab").innerText = total;
    document.getElementById("interviewTab").innerText = interview;
    document.getElementById("rejectTab").innerText = rejected;
}

function showAll() {
    currentTab = "all";
    renderJobs();
}

function showInterview() {
    currentTab = "interview";
    renderJobs();
}

function showRejected() {
    currentTab = "rejected";
    renderJobs();
}

renderJobs();
updateActiveTabUI();