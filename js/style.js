let facebookData = [
    postData = {
        username: "Geetanjali Institute of Technical Studies",
        location: "College & University",
        profile_img: "https://pradeepsuthar.github.io/facebook__app__UI__clone/images/gits_logo.png",
        postImgUrl: "https://scontent.fjai1-1.fna.fbcdn.net/v/t1.0-0/p526x296/118420435_1989629121161192_1683555692153901827_o.jpg?_nc_cat=111&_nc_sid=730e14&_nc_ohc=klpMXbo5KL4AX9qHltq&_nc_ht=scontent.fjai1-1.fna&tp=6&oh=5c8edbe4c7139f4401def841d48901a4&oe=5F6D44DE",
        postDesc:"Think #Engineering Think #GITS #admissionopen2020  #gitsudr #engineeringcollege #btech #mtech #MBA #MCA #admissionopen #Udaipur #gitsplacements #Placement2020 #bestcollegeinudaipur #bestcollegeinrajasthan",
        noOfLikes: '29',
        noOfComments: '15',
    },
    postData = {
        username: "BEARDO for Men",
        location: "Seponsored",
        profile_img: "https://pradeepsuthar.github.io/facebook__app__UI__clone/images/beardo_logo.cms",
        postImgUrl: "https://beardoc.s3.ap-south-1.amazonaws.com/uploads/x300-x300-a-banner-4117-6266.jpg",
        postDesc:"",
        noOfLikes: '1.1K',
        noOfComments: '3',
    },
    postData = {
        username: "Millind Gaba",
        location: "MillindGabaofficial",
        profile_img: "https://pradeepsuthar.github.io/facebook__app__UI__clone/images/Millind-Gaba-smiling.jpg",
        postImgUrl: "https://m.media-amazon.com/images/I/71hxLIH3tpL._SS500_.jpg",
        postDesc:"",
        noOfLikes: '10M',
        noOfComments: '83K',
    },
    postData = {
        username: "Pradeep Suthar",
        location: "Pindwara - Sirohi",
        profile_img: "https://pradeepsuthar.github.io/facebook__app__UI__clone/images/profile_user.png",
        postImgUrl: "https://www.google.com/logos/doodles/2020/stay-and-play-at-home-with-popular-past-google-doodles-cricket-2017-6753651837108767-2xa.gif",
        postDesc:"",
        noOfLikes: '12',
        noOfComments: '5',
    },
    postData = {
        username: "Google",
        location: "California",
        profile_img: "https://parqor.com/wp-content/uploads/2020/09/1004px-Google_22G22_Logo.svg.png",
        postImgUrl: "https://i.ytimg.com/vi/bE31y5HbukA/maxresdefault.jpg",
        postDesc:"",
        noOfLikes: '20',
        noOfComments: '13',
    },
    postData = {
        username: "Bill Gates",
        location: "Seponsored",
        profile_img: "https://eagle.co.ug/wp-content/uploads/2019/02/Bill-Gates-2.jpg",
        postImgUrl: "https://media.gatesnotes.com/-/media/Images/Articles/About-Bill-Gates/Annual-Letter/2019-Annual-Letter/al_2019_fb-auto-share-hero_1200x630_v19.ashx",
        postDesc:"What will it take to stop climate change?  <a href='https://www.gatesnotes.com/Climate-and-energy?preview&Climate-SU=1&&WT.mc_id=20200819000000_TGNICA_BG-PDM-PF-ClChInRoW-Clim2_pl-Facebook_Right_Column_ag_id6202926180359_ad_id6202926180959&WT.tsrc=BGPDM-PF&fbclid=IwAR2SXZiw_Tb-O0Pg_5kZ-PzdjDX1T0eXWP1lf-VUJiSSXvr9XsTfpWYJj08'>More</a>",
        noOfLikes: '283K',
        noOfComments: '25K',
    },
    postData = {
        username: "Millind Gaba",
        location: "MillindGabaofficial",
        profile_img: "https://pradeepsuthar.github.io/facebook__app__UI__clone/images/Millind-Gaba-smiling.jpg",
        postImgUrl: "https://i2.wp.com/www.lyricsstory.net/wp-content/uploads/2020/10/Kya-Karu-Lyrics-Millind-Gaba.jpg?fit=742%2C677&ssl=1",
        postDesc: "#admissionopen2020  #gitsudr #engineeringcollege #btech #mtech #MBA #MCA #admissionopen #Udaipur #gitsplacements #Placement2020 #bestcollegeinudaipur #bestcollegeinrajasthan",
        noOfLikes: '12M',
        noOfComments: '63K',
    },
]

let html = "";
facebookData.forEach(function (postData, i) {
    html += ` 
    <div class="jumbotron jumbotron-fluid px-0 py-2 mt-0 mb-2 post__card">
            <div class="post__header">
                <div class="user">
                    <div class="avatar my-auto">
                        <img src="${postData['profile_img']}" alt="">
                    </div>
                    <div class="text my-auto">
                        <b>${postData['username']}</b><br>
                        <small><a href="#" class="text-muted">${postData['location']} <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-dot" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                          </svg> <span class="material-icons">public</span></a></small>
                    </div>    
                </div>
                <div class="more">
                    <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-three-dots" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                      </svg>
                </div>
            </div>
            <div class="post__img">
                <div class="px-3">
                    <p>${postData['postDesc']}</p>
                </div>
                <img src="${postData['postImgUrl']}" class="img-fluid" alt="">
            </div>
            <div class="post__content">
                <div class="status">
                    <span><img src="images/facebook__like.jpg" class="fb__emojis" alt=""><img src="images/smiling-face-with-heart-shaped-eyes_1f60d.png" class="fb__emojis" alt=""><img src="images/rolling-on-the-floor-laughing_1f923.png" class="fb__emojis" alt=""> ${postData['noOfLikes']}</span>
                    <span>${postData['noOfComments']} comments</span>
                </div>
                <div class="action__btns border-top">
                    <p class="my-0 py-0"><span><svg width="1.2em" height="1.2em" viewBox="0 0 16 16" class="bi bi-hand-thumbs-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16v-1c.563 0 .901-.272 1.066-.56a.865.865 0 0 0 .121-.416c0-.12-.035-.165-.04-.17l-.354-.354.353-.354c.202-.201.407-.511.505-.804.104-.312.043-.441-.005-.488l-.353-.354.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581 0-.211-.027-.414-.075-.581-.05-.174-.111-.273-.154-.315L12.793 9l.353-.354c.353-.352.373-.713.267-1.02-.122-.35-.396-.593-.571-.652-.653-.217-1.447-.224-2.11-.164a8.907 8.907 0 0 0-1.094.171l-.014.003-.003.001a.5.5 0 0 1-.595-.643 8.34 8.34 0 0 0 .145-4.726c-.03-.111-.128-.215-.288-.255l-.262-.065c-.306-.077-.642.156-.667.518-.075 1.082-.239 2.15-.482 2.85-.174.502-.603 1.268-1.238 1.977-.637.712-1.519 1.41-2.614 1.708-.394.108-.62.396-.62.65v4.002c0 .26.22.515.553.55 1.293.137 1.936.53 2.491.868l.04.025c.27.164.495.296.776.393.277.095.63.163 1.14.163h3.5v1H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
                      </svg></span> <span class="ml-2">Like</span></p>
                    <p class="my-0 py-0"><span><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chat-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.5a2 2 0 0 1 1.6.8L8 14.333 9.9 11.8a2 2 0 0 1 1.6-.8H14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                      </svg></span> <span class="ml-2">Comment</span></p>
                    <p class="my-0 py-0"><span><svg width="1.2em" height="1.2em" viewBox="0 0 16 16" class="bi bi-reply" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M9.502 5.013a.144.144 0 0 0-.202.134V6.3a.5.5 0 0 1-.5.5c-.667 0-2.013.005-3.3.822-.984.624-1.99 1.76-2.595 3.876C3.925 10.515 5.09 9.982 6.11 9.7a8.741 8.741 0 0 1 1.921-.306 7.403 7.403 0 0 1 .798.008h.013l.005.001h.001L8.8 9.9l.05-.498a.5.5 0 0 1 .45.498v1.153c0 .108.11.176.202.134l3.984-2.933a.494.494 0 0 1 .042-.028.147.147 0 0 0 0-.252.494.494 0 0 1-.042-.028L9.502 5.013zM8.3 10.386a7.745 7.745 0 0 0-1.923.277c-1.326.368-2.896 1.201-3.94 3.08a.5.5 0 0 1-.933-.305c.464-3.71 1.886-5.662 3.46-6.66 1.245-.79 2.527-.942 3.336-.971v-.66a1.144 1.144 0 0 1 1.767-.96l3.994 2.94a1.147 1.147 0 0 1 0 1.946l-3.994 2.94a1.144 1.144 0 0 1-1.767-.96v-.667z"/>
                      </svg></span> <span class="ml-2">Share</span></p>
                </div>
            </div>
        </div>`;
});

document.getElementById("facebookPostList").innerHTML = html;