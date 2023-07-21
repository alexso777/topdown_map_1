"use strict";

let inscriptionImage = sessionStorage.getItem('inscriptionImage');
if(!inscriptionImage)
	inscriptionImage = "data:image/gif;base64,R0lGODlhIAAgAPMAAAAAAAAAADAwMFhYWHh4eJgAGNAIKJiYmKCgoNjY2NjY+AAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJKAAAACwAAAAAIAAgAAAE4hDISau9OOvNu/9gKI6eYJmkJByoyqZA8E5rAMvCoA/1fbC/1cGWChAOg1+SQAwJTILj8SCFtjZPAjT56/IA0SeWMNAGuF1vIFq+VqIGA8+oSP8UzFxce4HHCwMyCgZpBnVnBXEGfG8Ef4AyBwVTBAU/iImLbmwGBZ6AQnYsA5+JbRRRpZ9GokyqnowqLatMVD9HRgGfNG59VAIIBAQIUTMhMlrEAWvEuMdGwAkI0wjSUU0e0APVCd3dCDxMIGfC097SwcLYHUZM1NTtgcc7Ae9nOuvZy0/89dv5N5bBGEiwQgQAIfkECSgAAAAsAAAAACAAIAAABOEQyEmrvTjrzbv/YCiOnmCZpCQcqMqmQPBOawDLwqAP9Sf8AKCMdSAebMBfiyIgOJumAOEwKFYJSELzWWkWvgNtcDo9kE3NwbcgphUMcAMvWC3a57m4obCUvOE6AXV2d4IDcQUZb2BSCoRFClhqixprBQMyCgaEBo6ClpWWQ2xFBAVFAZaJG2s8j3Y5ayBfUq9YXyNNMmVTUn0+ZgIITghNMyG7wgIBAcq9Ir4ICQjU0sVYNh++A9IJ3t4IPFggUsTd4MMEmORhWNXV5dnsge+G68jhCM1Ky8wkzPJgCBy4IQIAOw==";
app.follower = document.getElementById("follower");
app.follower.src = inscriptionImage;