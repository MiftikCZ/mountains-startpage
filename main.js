const clocks = document.getElementById("clocks")
const timeFormat = `%h:%m`
const funfacts = [
    "Did you know this site was made by just MiftikCZ?",
    "Funfact: This website is MiftikCZ's first HTML project in 2023",
    "Pssst *this web is more useful when saved as default home page*",

    "Funfact: You opened this site %R1 times",
    "Did you know that you opened this site %R1 times?",
    "Funfact: this is your %R1th on this website",
    "I think you like this website because you visited it %R1 times xD",

    "Not very funny fact: You spend only about %R4 minutes on this",
    "Damn you spend %R4 minutes on this 👀️",

    "Last time i've seen you at %R2 :D",
    "Welcome back after %R3 minutes! :)",
    "Did you know that you spend last %R3 minutes without this site? :(",
    "Brooo hello i havent seen you the whole %R3 minutes! :DD",

    "Did you know the collected data from us are saved in your computer and not in some server",
    "Not very funny fact: All the data from funfacts you see there is Lifetime data and not daily",
    "Funfact: There is no point of this website to be in english",
    "Did you know, if you see this (in code), the feature of funfacts is not out yet?"
]


$( function() {
    $("#search").on('keydown', function (e) {
        if((e.keyCode==13)&&(!e.shiftKey)) {
            let val = document.getElementById("search").value
            if(!val) return
            if(val.startsWith(";")) {
                let nval = val.replace(/https/i, "")
                nval = val.replace(/http/i, "")
                nval = nval.replace(/\:\/\//i, "")
                nval = nval.replace(/\;/i, "")
                nval = `https://${nval}`
                window.open(nval)
                return
            }

            window.open(`https://duckduckgo.com/?t=ffab&q=${encodeURIComponent(val)}`)

            
        }
      });

})

document.querySelectorAll("[link]").forEach(e=>{
    e.setAttribute("title", e.getAttribute("link"))
    e.addEventListener("click", ()=>{
        window.open(e.getAttribute("link"))
    })
})

document.getElementById("search").value = "";

((async ()=>{
    document.getElementById("weather").innerText = await (await fetch("https://Weather-Api-NO-KEY.miftikcz.repl.co")).text() 
})())


function updateTime() {
    let date = new Date()
    let mm = date.getMinutes()
    if(mm < 10) {
        mm = "0"+mm.toString()
    }
    clocks.innerText = timeFormat
    .split("%h").join(date.getHours())
    .split("%m").join(mm)
    .split("%s").join(date.getSeconds())
    .split("%t").join(date.getMilliseconds())
}

setTimeout(()=>{
    setInterval(()=>{
        updateTime()
    },15 * 1000)
},(60 - new Date().getMinutes()) * 1000)

updateTime()