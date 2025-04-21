const buttons = document.querySelectorAll('.button-container button');
const cardContainers = {
    'mockTests': document.getElementById('mockTests'),
    'previousPapers': document.getElementById('previousPapers'),
    'samplePapers': document.getElementById('samplePapers')
};
const loginPageURL = '/login';
const hamburger = document.getElementById('hamburger-icon');
const dropdown = document.getElementById('dropdown-menu');

hamburger.addEventListener('click', () => {
    dropdown.classList.toggle('hidden');
});

function showSection(sectionId, clickedButton) {
    for (const id in cardContainers) {
        cardContainers[id].style.display = 'none';
    }

    if (cardContainers[sectionId]) {
        cardContainers[sectionId].style.display = 'flex';
    }

    buttons.forEach(button => {
        if (button === clickedButton) {
            button.classList.add('active');
            button.style.opacity = 1.0;
        } else {
            button.classList.remove('active');
            button.style.opacity = 0.6;
        }
    });
}

function isLoggedIn() {
    return localStorage.getItem('authToken') !== null;
}

function checkLoginAndProceed(event, targetURL) {
    if (isLoggedIn()) {
        window.location.href = targetURL;
    } else {
        event.preventDefault();
        window.location.href = loginPageURL;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Ensure the default tab (UG) is rendered on page load
    renderExams('UG');
    showSection('mockTests', buttons[0]);
});
const exams = {
    UG: [
        { name: "JEE Main", courses: "B.Tech / B.Arch", date: "01st April, 2025", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4oorRwK7DKKZE_T5nEVGg6pppcOR8tl0B9g&s" },
        { name: "NEET", courses: "MBBS", date: "05th May, 2025", img: "https://ik.imagekit.io/syustaging/SYU_PREPROD/Neet-logo_zlnivpoOB.webp?tr=w-3840" },
        { name: "CLAT", courses: "LLB / Integrated Law", date: "07th December, 2024", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRdfAwEIQAsVTmP6sb0fa4q05CZMmQsryQrg&s" },
        { name: "AILET", courses: "LLB / Integrated Law", date: "14th December, 2024", img: "https://iirfranking.com/exams/wp-content/uploads/2021/09/AILET.jpg" },
        { name: "DU JAT", courses: "BBA / BBM / BBS", date: "15th June, 2025", img: "https://campushunt.in/exam/DU%20JAT%202018.jpg" },
        { name: "NMIMS NPAT", courses: "BBA / BBM / BBS", date: "20th May, 2025", img: "https://www.iaspaper.net/wp-content/uploads/2023/03/NMIMS-NPAt-Logo.webp" },
        { name: "GPAT", courses: "B.Pharm", date: "10th April, 2025", img: "https://www.careerpower.in/blog/wp-content/uploads/sites/2/2025/01/06141848/GPAT-2025.jpg" },
        { name: "ICAR AIEEA", courses: "B.Sc Agriculture", date: "25th June, 2025", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR03m-YNftSAshWc7_-0Bv7njASzQAtutY6mg&s" },
        { name: "IPU CET", courses: "BCA", date: "30th April, 2025", img: "https://formfees.com/wp-content/uploads/IPU-CET-Exam.png" },
        { name: "NATA", courses: "B.Arch", date: "28th April, 2025", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3SbZ9uIr5m-v17jcAYkY_XSIG492NXOisew&s" },
        { name: "DUET", courses: "B.Com", date: "10th June, 2025", img: "https://www.campusoption.com/images/ExamInfo/01_06_20_054834_ducet.jpg" }
    ],
    PG: [
        { name: "GATE", courses: "M.Tech / M.Arch", date: "01st February, 2025", img: "https://upload.wikimedia.org/wikipedia/en/6/6b/Gate_2025_official_logo.png" },
        { name: "CAT", courses: "MBA / PGDM", date: "23rd November, 2024", img: "https://www.collegegyani.com/admin/upload/CAT8.jpg" },
        { name: "MAT", courses: "MBA / PGDM", date: "09th March, 2025", img: "https://upload.wikimedia.org/wikipedia/commons/8/86/Management_Aptitude_Test_Logo.jpg" },
        { name: "NIMCET", courses: "MCA", date: "15th March, 2025", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTooDx2u3PvQz05eR61F5AHJ4jFAn6eseRb1Q&s" },
        { name: "CUET PG", courses: "M.Sc / M.Com", date: "13th March, 2025", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFtSf0WsLbZX2HOa9WLRqFJArsqBr9-Md1PA&s" },
        { name: "CLAT PG", courses: "LLM", date: "07th December, 2024", img: "https://i0.wp.com/lawbhoomi.com/wp-content/uploads/2022/05/CLAT.jpeg?fit=600%2C400&ssl=1" },
        { name: "GPAT", courses: "M.Pharm", date: "10th April, 2025", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP4GkepczddFVhSmwTVxMr9NIAWiNIaeanfQ&s" }
    ],
    Diploma: [
        { name: "State Polytechnic Entrance", courses: "Diploma in Engineering", date: "20th May, 2025", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhGXhmWnWo1kB43J5dZlNm1eZn4Uxfm2LLhzGUKqgvrhFki4Chd9Af073715dpDSNXLi1NShvnvgp-cPA8s8fLAcM50Y4yjeCjcdHfAzScGy6CtbHtOeMayaS4N99UUqaF9uQfXZR4cvGmr/s2048/POLYCET.jpg" },
        { name: "State Pharmacy Entrance", courses: "Diploma in Pharmacy", date: "15th June, 2025", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-7czRnfhbEdXHjGPCinOAcd9WU-qgOdpOvw&s" },
        { name: "NCHM JEE", courses: "Diploma in Hotel Management", date: "10th May, 2025", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgmdXKUuqj1HSXmjE2QfO8m2jD0ELZU6VVT5ut1Kzi1swVdi57aWb7mMwVT23XpimLMt4gx_Ho1IZ7fPqkuvING02tdTFCAQx_YquRSgIA_2QQfoSuZjlP5Ckt5svGr_6Qq5WGyZGG8hgKKVqoWOeyDLiMP-2GlMYpFvehVIhhCofNnna4HYm44PQ/s580/NCHM%20JEE.jpg" },
        { name: "Institutional Tests", courses: "Fashion / Graphic / Interior Design / Computer Applications", date: "Varies", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/NIFT_Logo.svg/1200px-NIFT_Logo.svg.png" }
    ]
};

const courses = {
    btech: {
        name: "B.Tech / B.E.",
        description: "Bachelor of Technology/Engineering is a 4-year undergraduate program focusing on engineering and technology disciplines like Computer Science, Mechanical, Civil, and Electronics.",
        eligibility: "10+2 with Physics, Chemistry, and Mathematics. Minimum 50-60% marks required. Entrance exams like JEE Main or state-level tests are mandatory.",
        career: "Software Engineer, Mechanical Engineer, Civil Engineer, Data Scientist, Consultant in tech firms, PSUs, or R&D organizations.",
        exams: "JEE Main, BITSAT, VITEEE, SRMJEEE"
    },
    mbbs: {
        name: "MBBS",
        description: "Bachelor of Medicine and Bachelor of Surgery is a 5.5-year program (including internship) for aspiring doctors, covering medical sciences and clinical practice.",
        eligibility: "10+2 with Physics, Chemistry, Biology. Minimum 50% marks (40% for reserved categories). NEET is mandatory.",
        career: "Doctor, Surgeon, Medical Researcher, Hospital Administrator, Public Health Specialist.",
        exams: "NEET"
    },
    llb: {
        name: "LLB",
        description: "Bachelor of Laws is a 3-year undergraduate program for students interested in legal studies and practice.",
        eligibility: "Bachelor’s degree in any discipline with minimum 45-50% marks. Entrance exams like CLAT or AILET are required.",
        career: "Lawyer, Corporate Legal Advisor, Judge, Legal Consultant.",
        exams: "CLAT, AILET, LSAT India"
    },
    bba: {
        name: "BBA / BBM / BBS",
        description: "Bachelor of Business Administration/Management/Studies is a 3-year program focusing on management, marketing, and business operations.",
        eligibility: "10+2 in any stream with minimum 50% marks. Entrance exams like DU JAT or NPAT may be required.",
        career: "Marketing Manager, HR Manager, Entrepreneur, Business Analyst.",
        exams: "DU JAT, NMIMS NPAT, SET"
    },
    integrated_law: {
        name: "Integrated Law",
        description: "A 5-year integrated program combining undergraduate studies (BA/BBA/B.Com) with LLB, designed for early legal education.",
        eligibility: "10+2 in any stream with minimum 45-50% marks. Entrance exams like CLAT or AILET are required.",
        career: "Lawyer, Corporate Legal Advisor, Public Prosecutor, Judicial Services.",
        exams: "CLAT, AILET, LSAT India"
    },
    bpharm: {
        name: "B.Pharm",
        description: "Bachelor of Pharmacy is a 4-year program focusing on pharmaceutical sciences, drug development, and healthcare.",
        eligibility: "10+2 with Physics, Chemistry, Biology/Mathematics. Minimum 50% marks. Entrance exams like GPAT or state-level tests.",
        career: "Pharmacist, Drug Inspector, Pharmaceutical Researcher, Quality Control Analyst.",
        exams: "GPAT, MHT-CET, KEAM"
    },
    bsc_agriculture: {
        name: "B.Sc Agriculture",
        description: "Bachelor of Science in Agriculture is a 4-year program covering agricultural sciences, crop production, and agribusiness.",
        eligibility: "10+2 with Physics, Chemistry, Biology/Agriculture. Minimum 50% marks. Entrance exams like ICAR AIEEA required.",
        career: "Agricultural Officer, Farm Manager, Agribusiness Consultant, Research Scientist.",
        exams: "ICAR AIEEA, KEAM, EAMCET"
    },
    bca: {
        name: "BCA",
        description: "Bachelor of Computer Applications is a 3-year program focusing on computer science, programming, and IT applications.",
        eligibility: "10+2 with Mathematics (some colleges). Minimum 50% marks. Entrance exams like IPU CET may be required.",
        career: "Software Developer, IT Consultant, System Analyst, Database Administrator.",
        exams: "IPU CET, SET, NIMCET"
    },
    barch: {
        name: "B.Arch",
        description: "Bachelor of Architecture is a 5-year program focusing on architectural design, planning, and construction.",
        eligibility: "10+2 with Physics, Chemistry, Mathematics. Minimum 50% marks. NATA or JEE Main Paper 2 required.",
        career: "Architect, Urban Planner, Interior Designer, Project Manager.",
        exams: "NATA, JEE Main Paper 2"
    },
    bcom: {
        name: "B.Com",
        description: "Bachelor of Commerce is a 3-year program covering accounting, finance, economics, and business studies.",
        eligibility: "10+2 in any stream (Commerce preferred). Minimum 50% marks. Entrance exams like DUET may be required.",
        career: "Accountant, Financial Analyst, Tax Consultant, Auditor.",
        exams: "DUET, BHU UET, NPAT"
    },
    mtech: {
        name: "M.Tech / M.E.",
        description: "Master of Technology/Engineering is a 2-year postgraduate program specializing in advanced engineering disciplines.",
        eligibility: "B.Tech/B.E. with minimum 50-55% marks. GATE or equivalent exams required.",
        career: "Senior Engineer, Research Scientist, Project Manager, Academician.",
        exams: "GATE, CEED, TANCET"
    },
    mba: {
        name: "MBA / PGDM",
        description: "Master of Business Administration/Post Graduate Diploma in Management is a 2-year program focusing on management and leadership.",
        eligibility: "Bachelor’s degree in any discipline with minimum 50% marks. Entrance exams like CAT required.",
        career: "Corporate Manager, Consultant, Entrepreneur, Investment Banker.",
        exams: "CAT, XAT, MAT, CMAT"
    },
    mca: {
        name: "MCA",
        description: "Master of Computer Applications is a 2-3 year program focusing on advanced computer science and software development.",
        eligibility: "Bachelor’s degree (preferably BCA/B.Sc) with Mathematics. Minimum 50% marks. NIMCET or equivalent required.",
        career: "Software Engineer, IT Manager, Data Scientist, Cybersecurity Expert.",
        exams: "NIMCET, TANCET, MAH MCA CET"
    },
    msc: {
        name: "M.Sc",
        description: "Master of Science is a 2-year program offering specialization in sciences like Physics, Chemistry, Biology, or Mathematics.",
        eligibility: "B.Sc in relevant discipline with minimum 50% marks. Entrance exams like CUET PG or IIT JAM required.",
        career: "Researcher, Scientist, Academician, Data Analyst.",
        exams: "CUET PG, IIT JAM, BHU PET"
    },
    llm: {
        name: "LLM",
        description: "Master of Laws is a 1-2 year postgraduate program for advanced legal studies and specialization.",
        eligibility: "LLB with minimum 50% marks. Entrance exams like CLAT PG required.",
        career: "Legal Advisor, Judge, Corporate Lawyer, Academician.",
        exams: "CLAT PG, AILET PG"
    },
    mpharm: {
        name: "M.Pharm",
        description: "Master of Pharmacy is a 2-year program focusing on advanced pharmaceutical research and practice.",
        eligibility: "B.Pharm with minimum 50% marks. GPAT or equivalent exams required.",
        career: "Pharmaceutical Researcher, Regulatory Affairs Specialist, Quality Assurance Manager.",
        exams: "GPAT, NIPER JEE"
    },
    march: {
        name: "M.Arch",
        description: "Master of Architecture is a 2-year program specializing in advanced architectural design and urban planning.",
        eligibility: "B.Arch with minimum 50% marks. GATE or CEED required.",
        career: "Senior Architect, Urban Planner, Sustainable Design Consultant.",
        exams: "GATE, CEED"
    },
    mcom: {
        name: "M.Com",
        description: "Master of Commerce is a 2-year program focusing on advanced accounting, finance, and economics.",
        eligibility: "B.Com or equivalent with minimum 50% marks. Entrance exams like CUET PG may be required.",
        career: "Financial Manager, Chartered Accountant, Economist, Corporate Treasurer.",
        exams: "CUET PG, BHU PET"
    },
    diploma_engineering: {
        name: "Diploma in Engineering",
        description: "A 3-year program offering practical training in engineering disciplines like Mechanical, Civil, or Electrical.",
        eligibility: "10th pass with minimum 35-50% marks. State-level entrance exams may be required.",
        career: "Junior Engineer, Technician, Site Supervisor.",
        exams: "State Polytechnic Entrance, JEECUP"
    },
    diploma_pharmacy: {
        name: "Diploma in Pharmacy",
        description: "A 2-year program focusing on pharmaceutical sciences and pharmacy practice.",
        eligibility: "10+2 with Physics, Chemistry, Biology/Mathematics. Minimum 50% marks. State entrance exams required.",
        career: "Pharmacist, Medical Representative, Drug Inspector Assistant.",
        exams: "State Pharmacy Entrance, GPAT"
    },
    diploma_fashion: {
        name: "Diploma in Fashion Design",
        description: "A 1-2 year program teaching fashion design, garment construction, and textiles.",
        eligibility: "10th or 10+2 pass. Institutional tests may be required.",
        career: "Fashion Designer, Merchandiser, Stylist.",
        exams: "Institutional Tests"
    },
    diploma_hotel: {
        name: "Diploma in Hotel Management",
        description: "A 1-2 year program covering hospitality, hotel operations, and customer service.",
        eligibility: "10+2 in any stream. NCHM JEE or institutional tests required.",
        career: "Hotel Manager, Event Planner, Catering Manager.",
        exams: "NCHM JEE"
    },
    diploma_graphic: {
        name: "Diploma in Graphic Design",
        description: "A 1-year program focusing on graphic design, visual communication, and digital media.",
        eligibility: "10th or 10+2 pass. Institutional tests may be required.",
        career: "Graphic Designer, UI/UX Designer, Art Director.",
        exams: "Institutional Tests"
    },
    diploma_interior: {
        name: "Diploma in Interior Design",
        description: "A 1-2 year program teaching interior design, space planning, and decor.",
        eligibility: "10th or 10+2 pass. Institutional tests may be required.",
        career: "Interior Designer, Space Planner, Set Designer.",
        exams: "Institutional Tests"
    },
    diploma_computer: {
        name: "Diploma in Computer Applications",
        description: "A 1-year program covering software applications, programming, and IT basics.",
        eligibility: "10th or 10+2 pass. Institutional tests may be required.",
        career: "IT Support Specialist, Junior Programmer, Office Administrator.",
        exams: "Institutional Tests"
    }
};

// Add a utility function to check session status
function checkSessionStatus() {
  return fetch('session_status.php')
    .then(response => response.json())
    .then(data => data.loggedIn);
}

function renderExams(category) {
    const examList = document.getElementById("exam-list");
    examList.innerHTML = `
        <div class="flex space-x-6 min-w-fit whitespace-nowrap">
            ${exams[category].map(exam => `
                <div class="course-card bg-white p-6 rounded-xl shadow-lg text-center min-w-[200px]">
                    <a href="#"><img src="${exam.img}" alt="${exam.name} Exam" class="mx-auto h-14 w-auto mb-3"></a>
                    <h3 class="font-bold text-lg">${exam.name}</h3>
                    <p>${exam.courses}</p>
                    <p class="exam-date"><span class="font-semibold">Exam Date:</span> ${exam.date}</p>
                </div>
            `).join('')}
        </div>
    `;
}

function renderCourseOverview(courseId) {
    const course = courses[courseId];
    const overviewContent = document.getElementById("overview-content");
    overviewContent.innerHTML = `
        <div class="bg-white p-8 rounded-xl shadow-lg">
            <h2 class="text-3xl font-bold text-purple-800 mb-4">${course.name}</h2>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Description</h3>
            <p class="text-gray-600 mb-4">${course.description}</p>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Eligibility</h3>
            <p class="text-gray-600 mb-4">${course.eligibility}</p>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Career Prospects</h3>
            <p class="text-gray-600 mb-4">${course.career}</p>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Related Exams</h3>
            <p class="text-gray-600">${course.exams}</p>
        </div>
    `;
    document.getElementById("main-content").classList.add("hidden");
    document.getElementById("overview-section").classList.remove("hidden");
}

function showMainContent() {
    document.getElementById("overview-section").classList.add("hidden");
    document.getElementById("main-content").classList.remove("hidden");
}

const tabs = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => {
            t.classList.remove("bg-purple-600", "text-white");
            t.setAttribute("aria-selected", "false");
        });
        tab.classList.add("bg-purple-600", "text-white");
        tab.setAttribute("aria-selected", "true");

        const target = tab.getAttribute("data-tab");

        contents.forEach(content => content.classList.add("hidden"));
        document.getElementById(target).classList.remove("hidden");

        renderExams(target);
        showMainContent();
    });
});

document.querySelectorAll(".view-course").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const courseId = link.getAttribute("data-course");
        renderCourseOverview(courseId);
    });
});

document.getElementById("back-to-courses").addEventListener("click", showMainContent);

let currentIndex = 0;
  const images = document.getElementById("carouselImages");
  const totalImages = images.children.length;

  function moveSlide(direction) {
    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    images.style.transform = `translateX(-${currentIndex * window.innerWidth}px)`;
  }

  // Auto-slide every 2 seconds
  setInterval(() => {
    moveSlide(1);
  }, 2000);

  // Adjust transform on resize
  window.addEventListener('resize', () => {
    images.style.transform = `translateX(-${currentIndex * window.innerWidth}px)`;
  });
  const knowMoreButton = document.querySelector('.know-more-button');
  const popup = document.getElementById('myPopup');
  const closeButton = document.querySelector('.close-button');

  knowMoreButton.addEventListener('mouseover', () => {
    popup.style.display = 'block';
  });

  knowMoreButton.addEventListener('mouseout', () => {
    if (!popup.matches(':hover')) {
      popup.style.display = 'none';
    }
  });

  popup.addEventListener('mouseout', () => {
    popup.style.display = 'none';
  });

  knowMoreButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent any default button behavior (if it was inside a form)
    popup.style.display = 'block';
  });

  closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
  });