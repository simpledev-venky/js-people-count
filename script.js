let count=0
function increment(){
    count+=1
    document.getElementById("count").innerText=count
}
function save(){
    let countstr=count+" - "
    document.getElementById("prev").textContent+=countstr
        document.getElementById("count").innerText=0

    count=0
}