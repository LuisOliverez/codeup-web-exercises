

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// TODO #2✅
const languagesArr = users.filter(user => user.languages.length >= 3 );
console.log(languagesArr);

// TODO #3✅
const emails = users.map(function (user){
    return user['email'];
});
console.log(emails);


// TODO #4✅
const sumOfExperience = users.reduce ((total, user)=>{
    return total + user.yearsOfExperience;
}, 0);
console.log(sumOfExperience);

const averageExperience = sumOfExperience / users.length;


console.log(averageExperience);


// TODO #5✅
const longestEmail = emails.reduce((longest, email)=>{
    return email.length > longest.length ? email : longest;
}, '');
console.log(`${longestEmail} is the longest email`);


// TODO #6✅
users.forEach(function (user){
    console.log(`${user.name}'s email has ${user.email.length} characters`);
});

// TODO #7
const userNames = users.reduce((total, user) => {
    return
})
users.forEach((function (user){
    console.log(`${user.name}`)
}))