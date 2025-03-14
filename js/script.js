// fetch category data

async function categoryData() {
    const response = await fetch(
        "https://openapi.programming-hero.com/api/phero-tube/categories"
    );
    const data = await response.json();
    // console.log(data);
    showCategory(data.categories);
}

// display category
function showCategory(categories) {
    const categoriesContainer = document.getElementById("categories-container");
    for (let category of categories) {
        // console.log(category.category);
        // console.log(categoriesContainer);
        categoriesContainer.innerHTML += `<button onClick="categoryHandler(${category.category_id})" class="btn btn-sm lg:btn hover:bg-[#FF1F3D] hover:text-white">
          ${category.category}
        </button>`;
    }
}

// videosData fetching and displaying

// fetch videos Data
// async function videosData() {
//     const response = await fetch(
//         "https://openapi.programming-hero.com/api/phero-tube/videos"
//     );
//     const videoData = await response.json();
//     showVideosData(videoData.videos);
// }

// display videos data
const showVideosData = (videos) => {
    // console.log(videos);
    document.getElementById("cards-container").innerHTML = ""
    if (videos.length == 0) {
        const videoContainer = document.getElementById("cards-container");
        videoContainer.innerHTML += `<div class="col-span-full flex flex-col gap-6 lg:mt-20 justify-center items-center">
        <img src="../assets/Icon.png" alt="icon" />  
        <h2>Oops!! Sorry, There is no content here</h2>    
        </div>`;
    }
    for (let video of videos) {
        const videoContainer = document.getElementById("cards-container");
        videoContainer.innerHTML += `<div class="card bg-base-100 shadow-sm">
          <figure">
            <img
            class ="w-full object-cover h-[200px]"
              src=${video.thumbnail}
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <!--profile description container -->
            <div class="flex space-x-4">
              <!-- avatar container -->
              <div class="avatar">
                <div
                  class="ring-primary ring-offset-base-100 w-10 h-10 rounded-full ring ring-offset-2"
                >
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <!-- description container -->
              <div class="space-y-4">
                <!-- title -->
                <h2 class="card-title">${video.title}</h2>
                <!-- name, verification badge and views container -->
                <div class="space-y-2">
                  <!-- name and badge container -->
                  <div class="flex space-x-2">
                    <p class="font-normal text-[14px] text-[#171717B3]">
                      Awlad Hossain
                    </p>
                    <img
                      class="h-5 w-5"
                      src="./assets/verifiedIcon.png"
                      alt="verified logo"
                    />
                  </div>
                  <!-- views -->
                  <p class="font-normal text-[14px] text-[#171717B3]">
                    ${video.others.views} views
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>`;
    }
};

// button click handler
const allClickHandler = async () => {
    const response = await fetch(
        "https://openapi.programming-hero.com/api/phero-tube/videos"
    );
    const videoData = await response.json();
    showVideosData(videoData.videos);
}

const categoryHandler = async (categoryId) => {
    const url =
        `https://openapi.programming-hero.com/api/phero-tube/category/${categoryId}`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    showVideosData(data.category)
};

categoryData();

// videosData();
