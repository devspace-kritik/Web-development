const card = document.createElement("div");
function addCard(
  image,
  vidName,
  chName = "codeWithHarry",
  views = 0,
  months,
  duration
) {
  card.classList.add("card");
  document.querySelector(".container").appendChild(card);
  const img = document.createElement("img");
  // img.src = image;
  img.src = image;
  img.classList.add("boxStyle");
  document.querySelector(".card").appendChild(img);

  const childBox = document.createElement("div");
  childBox.style.display = "flex";
  childBox.style.flexDirection = "column";
  childBox.style.color = "white";
  childBox.style.padding = "5px 10px";
  childBox.style.fontWeight = "medium";
  childBox.classList = "childBox";
  document.querySelector(".card").appendChild(childBox);

  const firstText = document.createElement("span");
  firstText.textContent = vidName;
  document.querySelector(".childBox").appendChild(firstText);

  const secondText = document.createElement("span");
  secondText.textContent = `${chName} - ${views} views - 2 months ago`;
  secondText.style.color = "gray";
  secondText.style.fontSize = "12px";
  secondText.style.paddingTop = "5px";
  document.querySelector(".childBox").appendChild(secondText);
}

let vidInfo = {
    "url": "https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDPqs5LtUVsb50otOywVTZEmI75fg",
    "title":  "Installing VS Code & how the websites works | Sigma Web-Development Course- Tutorial #1",
    "views": calcViews(938427478),
    "chName": "CodeWithHarr"
}

addCard(vidInfo.url, vidInfo.title, vidInfo.chName, vidInfo.views );
console.log(calcViews(9326362876));

addCard(vidInfo.url, vidInfo.title, vidInfo.chName, vidInfo.views );
console.log(calcViews(9326362876));
addCard(vidInfo.url, vidInfo.title, vidInfo.chName, vidInfo.views );
console.log(calcViews(9326362876));

function calcViews(v) {
    let str = String(v);
    let len = str.length;
    if(len>6){
        var newStr = len>9? str.slice(0, 3): Math.floor(str/1000000);
        console.log(newStr);
        return newStr + 'M';
    }else if(len>3){
           newStr =  len>5 ? str.slice(0, 3) : Math.floor(str/1000);
           console.log(newStr);
        return newStr + 'K';
    }else{
        newStr = str;
        console.log(newStr);
        return newStr;
    }
}
// img.style.width = "100px"
// img.style.height = "100px"
// img.classList.add("boxStyle");
// console.log(img);
