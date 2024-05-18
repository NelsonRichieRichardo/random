function calculate() {
    const weight = document.getElementById("berat").value
    const height = document.getElementById("tinggi").value

    // Verifikasi data apakah valid
    if(height==="" || weight===""){
        alert("Please Enter a Valid Data")
    }else{
        // Perhitungan BMI
        const heights = height/100
        const bmiw = weight/(heights*heights).toFixed(1)
        const condition= document.getElementById("condition")
        const bmi = document.getElementById("bmi")
        const notes = document.getElementById("notes")
        var jenis = document.getElementById("gender")
        // Verifikasi hasil perhitungan BMI
        if(bmiw < 18.5){
            condition.innerHTML = `Underweight`
            bmi.innerHTML = `${bmiw.toFixed(1)}`
            notes.innerHTML = `Kekurangan berat badan`
            bmi.style.color = "yellow"
        } else if (bmiw>=18.5 && bmiw <=24.9){
            condition.innerHTML = `Normal`
            bmi.innerHTML = `${bmiw.toFixed(1)}`
            notes.innerHTML = `Normal (ideal)`
            bmi.style.color = "green"
        } else if (bmiw >= 25 && bmiw <= 29.9){
            condition.innerHTML = `Overweight`
            bmi.innerHTML = `${bmiw.toFixed(1)}`
            notes.innerHTML = `Kelebihan berat badan`
            bmi.style.color = "orange"
        } else {
            condition.innerHTML = `Obesity`
            bmi.innerHTML = `${bmiw.toFixed(1)}`
            notes.innerHTML = `Kegemukan (obesitas)`
            bmi.style.color = "red"
        }
    }
}   
