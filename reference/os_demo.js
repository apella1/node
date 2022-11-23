import { platform, arch, cpus, freemem, totalmem, homedir, uptime } from 'os';

// platform 
console.log(platform());

// cpu architecture 
console.log(arch());

// cpu core info
console.log(cpus());

// free memory
console.log(freemem());

// total memory
console.log(totalmem());

//home directory 
console.log(homedir());

// uptime
console.log(uptime());

