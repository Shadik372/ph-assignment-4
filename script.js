console.log("Connected");
let currentFilter = "Available"; // default tab
// Job Array with Objects

let jobs = [
  {
    id: 1,
    company: "TechNova Labs",
    position: "Frontend Engineer",
    location: "Hybrid",
    type: "Full-time",
    salary: "$90,000 - $120,000",
    statusText: "NOT APPLIED",
    description:
      "Develop responsive user interfaces using modern JavaScript frameworks.",
    status: "Available",
  },
  {
    id: 2,
    company: "CloudSphere Inc",
    position: "Backend Developer",
    location: "Remote",
    type: "Contract",
    salary: "$70/hr",
    statusText: "NOT APPLIED",
    description: "Develop scalable APIs using Node.js and cloud services.",
    status: "Available",
  },
  {
    id: 3,
    company: "NextGen Systems",
    position: "Full Stack Engineer",
    location: "Onsite",
    type: "Full-time",
    salary: "$100,000 - $135,000",
    statusText: "NOT APPLIED",
    description:
      "Work across frontend and backend systems for enterprise apps.",
    status: "Available",
  },
  {
    id: 4,
    company: "PixelWorks Studio",
    position: "UI/UX Designer",
    location: "Remote",
    type: "Freelance",
    salary: "$60/hr",
    statusText: "NOT APPLIED",
    description: "Design intuitive user experiences for web and mobile apps.",
    status: "Available",
  },
  {
    id: 5,
    company: "DataBridge Corp",
    position: "Data Analyst",
    location: "Hybrid",
    type: "Full-time",
    salary: "$85,000 - $110,000",
    statusText: "NOT APPLIED",
    description:
      "Analyze datasets and create dashboards for business insights.",
    status: "Available",
  },
  {
    id: 6,
    company: "SecureNet Solutions",
    position: "Cybersecurity Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    statusText: "NOT APPLIED",
    description: "Secure systems and monitor infrastructure against threats.",
    status: "Available",
  },
  {
    id: 7,
    company: "InnovateX",
    position: "Product Manager",
    location: "Onsite",
    type: "Full-time",
    salary: "$95,000 - $125,000",
    statusText: "NOT APPLIED",
    description: "Lead product development and roadmap planning.",
    status: "Available",
  },
  {
    id: 8,
    company: "BrightWave Digital",
    position: "Marketing Specialist",
    location: "Remote",
    type: "Full-time",
    salary: "$65,000 - $85,000",
    statusText: "NOT APPLIED",
    description: "Plan and execute digital campaigns across social platforms.",
    status: "Available",
  },
];

// Job Showing

function renderJobs(filter) {
  let container = document.querySelector(".interview-card");
  container.innerHTML = "";

  let matchCount = 0;

  for (let i = 0; i < jobs.length; i++) {
    let job = jobs[i];

    if (filter && job.status !== filter) continue;

    matchCount++;

    container.innerHTML += `
      <div class="card job-card border border-gray-200 bg-base-100 w-full shadow-sm">

        <div class="card-body space-y-3">

          <div class="flex items-start">
            <div class="w-full">

              <div class="flex items-center gap-3">

                <h2 class="card-title text-[#002C5C]">
                  ${job.company}
                </h2>

                <button
                  class="ml-auto btn btn-ghost btn-sm delete-button"
                  onclick="deleteJob(${job.id})">

                  <img src="Trash.png" alt="">
                </button>

              </div>

              <p class="text-gray-400 text-sm">${job.position}</p>

              <p class="text-gray-400 text-sm mt-1">
                ${job.location} • ${job.type} • ${job.salary}
              </p>

            </div>
          </div>

          <div>
            <span class="bg-[#EEF4FF] rounded-sm text-xs text-blue-600 px-3 py-1">
              ${job.statusText}
            </span>
          </div>

          <p class="text-sm text-gray-600">
            ${job.description}
          </p>

          <div class="flex gap-3 justify-start">

            <button
              class="btn btn-outline btn-success btn-sm"
              onclick="setStatus(${job.id}, 'Interview')">
              Interview
            </button>

            <button
              class="btn btn-outline btn-error btn-sm"
              onclick="setStatus(${job.id}, 'Rejected')">
              Rejected
            </button>

          </div>

        </div>
      </div>
    `;
  }

  // If no jobs were found 
  if (matchCount === 0) {
    container.innerHTML = `
      <div class="card noJobs shadow-sm">
        <div class="flex flex-col justify-center items-center p-[40px] mt-4">
          <img src="jobs.png" alt="" />
          <p class="text-2xl font-semibold text-[#002C5C]">No jobs available</p>
          <p>Check back soon for new job opportunities</p>
        </div>
      </div>
    `;
  }

  updateCount();
}

// Status

function setStatus(id, newStatus) {

  for (var i = 0; i < jobs.length; i++) {
    if (jobs[i].id === id) {

      jobs[i].status = newStatus;

      // Update the label text
      if (newStatus === "Interview") {
        jobs[i].statusText = "INTERVIEW";
      } 
      else if (newStatus === "Rejected") {
        jobs[i].statusText = "REJECTED";
      }

      break;
    }
  }

  renderJobs();
}

//Delete

function deleteJob(id) {
  for (let i = 0; i < jobs.length; i++) {
    if (jobs[i].id === id) {
      jobs.splice(i, 1);
      break;
    }
  }

  renderJobs(currentFilter);
}

// filter

function resetFilterButtons() {
  let buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach(function (btn) {
    btn.classList.remove("bg-blue-600", "text-white");

    btn.classList.add("text-[#64748B]");
  });
}

function setActiveTab(tab) {
  currentFilter = tab;

  resetFilterButtons();

  let id;
  if (tab === "Available") {
    id = "all-filter";
  } else {
    id = tab.toLowerCase() + "-filter";
  }

  let btn = document.getElementById(id);

  if (btn) {
    btn.classList.remove("text-[#64748B]");
    btn.classList.add("bg-blue-600", "text-white");
  }

  renderJobs(tab);
}

// All
document.getElementById("all-filter").onclick = function () {
  setActiveTab("Available");
};

// Interview
document.getElementById("interview-filter").onclick = function () {
  setActiveTab("Interview");
};

// Rejected
document.getElementById("rejected-filter").onclick = function () {
  setActiveTab("Rejected");
};

// count

function updateCount() {
  let total = jobs.length;
  let interview = 0;
  let rejected = 0;
  let available = 0;

  for (let i = 0; i < jobs.length; i++) {
    if (jobs[i].status === "Interview") interview++;
    else if (jobs[i].status === "Rejected") rejected++;
    else available++;
  }

  let totalEl = document.getElementById("job-count");
  let interviewEl = document.getElementById("interview-count");
  let rejectedEl = document.getElementById("rejected-count");
  let rightCount = document.getElementById("availableJobCount");

  if (totalEl) totalEl.innerText = total;
  if (interviewEl) interviewEl.innerText = interview;
  if (rejectedEl) rejectedEl.innerText = rejected;

  if (rightCount) {
    if (currentFilter === "Available") {
      rightCount.innerText = available + " Jobs";
    }

    if (currentFilter === "Interview") {
      rightCount.innerText = interview + " Jobs";
    }

    if (currentFilter === "Rejected") {
      rightCount.innerText = rejected + " Jobs";
    }
  }
}

setActiveTab("Available");
