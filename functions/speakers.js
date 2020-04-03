exports.handler = function(event, context, callback) {
  const { name } = event.queryStringParameters
  const speakerList =  [
    {
      "handle": "stokfredrik",
      "name": "STÖK",
      "talk": "From NOOB to MVH: What does it really take",
      "slot": "9:45AM – 10:15AM PST"
    },
    {
      "handle": "niden",
      "name": "Johnathan Miranda",
      "talk": "Try Harder? Keep Trying! Demystifying the OSCP & OSCE Certifications",
      "slot": "10:20AM – 11:00AM PST"
    },
    {
      "handle": "TomNomNom",
      "name": "Tom Hudson",
      "talk": "Bug Bounties With Bash",
      "slot": "11:00AM – 11:55AM PST"
    },
    {
      "handle": "ChloeMessdaghi",
      "name": "Chloé Messdaghi",
      "talk": "Hacker Rights",
      "slot": "12:00PM - 12:30PM PST"
    },
    {
      "handle": "zseano",
      "name": "Sean",
      "talk": "Unique mindset - Hacking with zseano",
      "slot": "12:30PM - 1:00PM PST"
    },
    {
      "handle": "d0nutptr",
      "name": "Nathaniel aka Mr. Rust",
      "talk": "Practical Exploitation of Insecure Randomness on V8",
      "slot": "1:05PM – 2:35PM PST"
    },
    {
      "handle": "uraniumhacker",
      "name": "Rojan Rijal",
      "talk": "Protecting your internal assets from enterprise misconfigurations",
      "slot": "2:40PM – 3:15PM PST"
    },
    {
      "handle": "erbbysam",
      "name": "Samuel Erb",
      "talk": "Hostnames: Trials, Tribulations & VHost Misconfigurations",
      "slot": "3:15PM – 3:35PM PST"
    },
    {
      "handle": "DawnIsabel",
      "name": "Dawn Isabel",
      "talk": "iOS Recon with Radare2",
      "slot": "3:40PM - 4:10PM PST"
    },
    {
      "handle": "B3nac",
      "name": "Kyle Benac",
      "talk": "Getting Started with Android Hacking",
      "slot": "4:05PM - 4:40PM PST"
    },
    {
      "handle": "jhaddix",
      "name": "Jason Haddix",
      "talk": "The Bug Hunter's Methodology 4.0",
      "slot": "tbd"
    }
  ]
  const speakers = speakerList.map(s => s.handle.toLowerCase())
  const index = speakers.findIndex(s => s.includes(name.toLowerCase()))
 
  if (index >= 0 && name.length > 3) {
    const { handle, name, talk, slot } = speakerList[index]
    let message
    if (handle === "jhaddix") {
      message = JSON.stringify({ msg: `${name} (${handle}) sadly cannot make the event. His talk "${talk}" will be rescheduled. twitter.com/${handle}`})
    } else {
      message = JSON.stringify({ msg: `${name} (${handle}) will be presenting "${talk}" at ${slot}. twitter.com/${handle}`})
    }
    callback(null, {
      statusCode: 200,
      body: message
    })
  } else {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ msg: `No speaker found`})
    })
  }
}
