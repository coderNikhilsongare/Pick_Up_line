  const generateButton = document.querySelector("button");
  const text = document.querySelector(".text");

  const generatelines = () => {
    if(pickuplines.length > 0){
      const generate = Math.floor(Math.random() * pickuplines.length);
      const line = pickuplines[generate];
      text.textContent = line;
      console.log(line);
    }
  };

  generateButton.addEventListener("click" , generatelines);


