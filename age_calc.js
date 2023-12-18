
const DayInput = document.querySelector(`#day`)
const MonthInput = document.querySelector(`#month`)
const YearInput = document.querySelector(`#year`)

// const ErrorMsg = document.querySelector(`.error`) *//
const calc_button = document.querySelector(`#calc_btn`)

const AgeOutput= document.querySelector(`.age-edit`)
const MonthOutput = document.querySelector(`.month-edit`)
const DayOutput = document.querySelector(`.day-edit`)

const error_day = document.querySelector(`.error-day`);
const error_month = document.querySelector(`.error-month`);
const error_year = document.querySelector(`.error-year`);

// Validation for day
let valDay = () => {
    let day = +DayInput.value
    valid = false
    if(day > 31){
        error_day.textContent = `invalid date`
    } else if(day = 0){
        error_day.textContent = `pls input a valid no.`
    }else if(!DayInput.value){
        error_day.textContent = `field is required`;
    }else{
        error_day.textContent = ``;
        valid = true
    }
    return valid;

}
DayInput.addEventListener(`input`, valDay);

// validation for month
let valMonth = () => {
    let month = +MonthInput.value
    valid = false
    if(month > 12){
        error_month.textContent = `invalid date`
    } else if(month = 0){
        error_month.textContent = `pls input a valid no.`
    }else if(!MonthInput.value){
        error_month.textContent = `field is required`;
    }else{
        error_month.textContent = ``;
        valid = true
    }
    return valid;

}
MonthInput.addEventListener(`input`, valMonth);

// Validatiob for YearInput
let valYear = () => {
    let year = +YearInput.value
    valid = false
    if(year > 2023){
        error_year.textContent = `invalid date`
    } else if(year = 0){
        error_year.textContent = `pls input a valid no.`
    }else if(!YearInput.value){
        error_year.textContent = `field is required`;
    }else{
        error_year.textContent = ``;
        valid = true
    }
    return valid;

}
YearInput.addEventListener(`input`, valYear);

// Age calculation
const calculateAge = () => {
    console.log(DayInput.value, MonthInput.value, YearInput.value)

// making sure user input numbers only and not text 
    let Day = +DayInput.value,
        Month = +MonthInput.value,
        Year = +YearInput.value;
// getting current date 
    let CurrentDate = new Date();
//comparing current date withinputted date by user
    let diffDay = CurrentDate.getDate() - Day,
        diffMonth = CurrentDate.getMonth() - Month + 1,
        diffYear = CurrentDate.getFullYear() - Year;
        
//givine user's age output
AgeOutput.textContent = diffYear;
MonthOutput.textContent = diffMonth;
DayOutput.textContent = diffDay;
}

calc_button.addEventListener(`click`, calculateAge)

