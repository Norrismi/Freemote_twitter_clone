var user1 = {
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    joinedDate: 'June 2009',
    followingCount: 103,
    followerCount: 47900000,
    avatarURL: 'assets/elonmusk.jpg',
    coverPhotoURL: 'assets/elonmusk-cover.jpeg',
    tweets: [
        {
            text: 'I admit to judging books by their cover',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Starship to the moon',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'Out on launch pad, engine swap underway',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

var user2 = {
    userName: '@BillGates',
    displayName: 'Bill Gates',
    joinedDate: 'June 2009',
    followingCount: 274,
    followerCount: 53800000,
    avatarURL: 'assets/billgates.jpg',
    coverPhotoURL: 'assets/billgates-cover.jpeg',
    tweets: [
        {
            text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Should I start tweeting memes? Let me know in a comment.',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'In 2020, I read a book every hour.',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

let topNav = document.querySelector('.twt_main-container .twt_top-nav')
let topNavEl = document.querySelector('.twt_top-nav')




// let follower = user1.followerCount.toString().split('').splice(2,0,'.').join()
//     console.log(follower)


//     function numberFixed(num){
        

//     }
//     numberFixed(followerCount)


console.log(user1.tweets)



//banner
document.querySelector('.twt_banner').innerHTML = `<img class='elon_cover' src="./assets/elonmusk-cover.jpeg">`

document.querySelector('.twt_user-intro').innerHTML = `<div>${user1.displayName} </div>`

document.querySelector('.info-img').innerHTML = `<img class='elon_img' src="./assets/elonmusk.jpg">`


//info section
document.querySelector('.info-name').innerHTML = `
<div class='twt_info-name'>${user1.displayName}</div>
<div class='twt_info-handle'>${user1.userName} </div>
`

document.querySelector('.info-date').innerHTML = `
<div class='twt_info-joined'><i class="far fa-calendar-alt"></i> Joined ${user1.joinedDate}</div>
`

document.querySelector('.info-follower-container').innerHTML = `
<div class='twt_info-following'>${user1.followingCount} <span>Following</span> </div>
<div class='twt_info-followers'>${user1.followerCount} <span>Followers</span> </div>
`



 document.querySelector('.twt_text-container').innerHTML

 let twt_card =`
    <div class='twt_card'>
    <img class='elon_avatar' src=${user1.avatarURL} >
    <div class='text_info'>
    
    <div class='text_name'>
        <b>${user1.displayName}</b>
        <div class='text_info-username'>${user1.userName}</div>
        <i class="fas fa-ellipsis-h"></i>
       
    
    </div>
    
            <div class='text_tweet'>
            ${user1.tweets[0].text}
            </div>
        </div>
    
    </div>
    `

    //console.log(twt_card)


    // user1.tweets.forEach(a => console.log(a.text)  )

    for(i=0; i<=user1.tweets.length; i++) {
        document.querySelector('.twt_text-container').innerHTML += `
        <div class='twt_card'>
        <img class='elon_avatar' src=${user1.avatarURL} >
        <div class='text_info'>
        
        <div class='text_name'>
            <b>${user1.displayName}</b>
            <div class='text_info-username'>${user1.userName}</div>
            <i class="fas fa-ellipsis-h"></i>
           
        
        </div>
        
                <div class='text_tweet'>
                ${user1.tweets[i].text}
                </div>
            </div>
        
        </div>
        `
    }



