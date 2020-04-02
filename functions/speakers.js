exports.handler = function(event, context, callback) {
  const { name } = event.queryStringParameters
  const speakerList =  [
    {
      "name": "stokfredrik",
      "talk": "From NOOB to MVH: What does it really take",
      "slot": "9:45AM – 10:10AM"
    },
    {
      "name": "niden",
      "talk": "Try Harder? Keep Trying! Demystifying the OSCP & OSCE Certifications",
      "slot": "10:15AM – 10:30AM"
    },
    {
      "name": "TomNomNom",
      "talk": "Bug Bounties With Bash",
      "slot": "11:00AM – 11:55AM"
    },
    {
      "name": "ChloeMessdaghi",
      "talk": "Hacker Rights",
      "slot": "12:00PM - 12:30PM"
    },
    {
      "name": "zseano",
      "talk": "Unique mindset - Hacking with zseano",
      "slot": "12:30PM - 1:30PM"
    },
    {
      "name": "d0nutptr",
      "talk": "Practical Exploitation of Insecure Randomness on V8",
      "slot": "1:30PM – 2:00PM"
    },
    {
      "name": "uraniumhacker",
      "talk": "Protecting your internal assets from enterprise misconfigurations",
      "slot": "2:15PM – 3:00PM"
    },
    {
      "name": "erbbysam",
      "talk": "Hostnames: Trials, Tribulations & VHost Misconfigurations",
      "slot": "3:05PM – 3:35PM"
    },
    {
      "name": "DawnIsabel",
      "talk": "iOS Recon with Radare2",
      "slot": "3:35pm - 4:05pm"
    },
    {
      "name": "B3nac",
      "talk": "Getting Started with Android Hacking",
      "slot": "4:05pm - 4:35pm"
    }
  ]
  const speakers = speakerList.map(s => s.name.toLowerCase())
  const index = speakers.findIndex(s => s.includes(name.toLowerCase()))
 
  if (index >= 0 && name.length > 3) {
    const { name, talk, slot } = speakerList[index]
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ msg: `${name}'s talk is called "${talk}" and scheduled for [${slot}]`})
    })
  } else {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ msg: `No speaker found`})
    })
  }
}