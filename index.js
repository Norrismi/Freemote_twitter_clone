var users = {
     user1: {
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
    },
    
     user2: {
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
    }
}



let topNav = document.querySelector('.twt_main-container .twt_top-nav')
let topNavEl = document.querySelector('.twt_top-nav')




 
   
            let url_string = (window.location.href).toLowerCase();
            let url = new URL(url_string);
            let typedUser = url.searchParams.get('user')

           if(typedUser == 'user1' ){

        //banner
        document.querySelector('.twt_banner').innerHTML = `<img class='elon_cover' src="./assets/elonmusk-cover.jpeg">`
        document.querySelector('.twt_user-intro').innerHTML = `<div>${users.user1.displayName} </div>`
        document.querySelector('.info-img').innerHTML = `<img class='elon_img' src=${users.user1.avatarURL} >`

        //info section
        document.querySelector('.info-name').innerHTML = `
        <div class='twt_info-name'>${users.user1.displayName}</div>
        <div class='twt_info-handle'>${users.user1.userName} </div>
        `
        document.querySelector('.info-date').innerHTML = `
        <div class='twt_info-joined'><i class="far fa-calendar-alt"></i> Joined ${users.user1.joinedDate}</div>
        `
        document.querySelector('.info-follower-container').innerHTML = `
        <div class='twt_info-following'>${users.user1.followingCount} <span>Following</span> </div>
        <div class='twt_info-followers'>${users.user1.followerCount/ 1000000}M <span>Followers</span> </div>
        `

            for(i=0; i<=users.user1.tweets.length; i++) {
                document.querySelector('.twt_text-container').innerHTML += `
                <div class='twt_card'>
                <img class='elon_avatar' src=${users.user1.avatarURL} >
                <div class='text_info'>
                
                <div class='text_name'>
                    <b>${users.user1.displayName}</b>
                    <div class='text_info-username'>${users.user1.userName}</div>
                    <div class='text_info-time'><span class=''>&#8226;</span>${moment([users.user1.tweets[i].timestamp],'MM').add(1, 'months').fromNow()}</div>
                    <i class="fas fa-ellipsis-h"></i>
                   
                
                </div>
                
                        <div class='text_tweet'>
                        ${users.user1.tweets[i].text}
                        </div>
                    </div>
                
                </div>
                `
            }
           }else{

        //banner
        document.querySelector('.twt_banner').innerHTML = `<img class='elon_cover' src=${users.user2.coverPhotoURL} >`
        document.querySelector('.twt_user-intro').innerHTML = `<div>${users.user2.displayName} </div>`
        document.querySelector('.info-img').innerHTML = `<img class='elon_img' src=${users.user2.avatarURL} >`

        //info section
        document.querySelector('.info-name').innerHTML = `
        <div class='twt_info-name'>${users.user2.displayName}</div>
        <div class='twt_info-handle'>${users.user2.userName} </div>
        `
        document.querySelector('.info-date').innerHTML = `
        <div class='twt_info-joined'><i class="far fa-calendar-alt"></i> Joined ${users.user2.joinedDate}</div>
        `
        document.querySelector('.info-follower-container').innerHTML = `
        <div class='twt_info-following'>${users.user2.followingCount} <span>Following</span> </div>
        <div class='twt_info-followers'>${users.user2.followerCount/ 1000000}M <span>Followers</span> </div>
        `
            for(i=0; i<=users.user2.tweets.length; i++) {
                document.querySelector('.twt_text-container').innerHTML += `
                <div class='twt_card'>
                <img class='elon_avatar' src=${users.user2.avatarURL} >
                <div class='text_info'>
                
                <div class='text_name'>
                    <b>${users.user2.displayName}</b>
                    <div class='text_info-username'>${users.user2.userName}</div>
                    <div class='text_info-time'><span class=''>&#8226;</span>${moment([users.user2.tweets[i].timestamp],'MM').add(1, 'months').fromNow()}</div>
                    <i class="fas fa-ellipsis-h"></i>
                   
                
                </div>
                
                        <div class='text_tweet'>
                        ${users.user2.tweets[i].text}
                        </div>
                    </div>
                
                </div>
                `
            }
           }

      

          
            
       


        
  

