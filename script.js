function rand_pwd() {
    const U_C = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const L_C = 'abcdefghijklmnopqrstuvwxyz';
    const num = '0123456789';
    const symb = '!@#$%^&*()-=_+';
    const all_char = U_C + L_C + num + symb;
    const maxLength=14;
    const minLength=6;
    let pwd = ''
    let has_U_C = false;
    let has_L_C = false;
    let has_num = false;
    let has_symb = false;
    const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    while (pwd.length < length) {
        let rand_ind = Math.floor(Math.random() * all_char.length);
        let rand_char = all_char.charAt(rand_ind);
        if (U_C.includes(rand_char)) {
            has_U_C = true;
        } else if (L_C.includes(rand_char)) {
            has_L_C = true;
        } else if (num.includes(rand_char)) {
            has_num = true;
        } else if (symb.includes(rand_char)) {
            has_symb = true;
        }
        pwd += rand_char;
    }
    if (!has_U_C || !has_L_C || !has_num || !has_symb) {
        return rand_pwd();
    }

    const inp_field=document.querySelector(".form-input")
    if(inp_field){
        inp_field.value=pwd;
        const gen_btn=document.querySelector(".generate-btn");
        if(gen_btn){
            gen_btn.textContent="Generated!";
            setTimeout(() => {
                gen_btn.textContent="Generate";
            }, 1000);
        }
    }
}
function copy_pwd(){
    const inp_field=document.querySelector(".form-input");
    if(inp_field){
        inp_field.select();
        navigator.clipboard.writeText(inp_field.value)
        .then(()=>{
            const copy_btn=document.querySelector(".copy-btn");
            if(copy_btn){
                copy_btn.textContent="Copied!";
                setTimeout(() => {
                    copy_btn.textContent="Copy";
                }, 1000);
            }
        }).catch((error)=>{
            console.error("Unable to copy the password", error);
        })
    }
}
function show_pwd(){
    const pwd_input=document.querySelector(".form-input");
    const toggle_icon=document.querySelector(".toggle-pwd");
    if(pwd_input){
        if(pwd_input.type==="password"){
            pwd_input.type="text";
            toggle_icon.classList.remove("fa-eye-slash")
            toggle_icon.classList.add("fa-eye")
        }
        else{
            pwd_input.type="password";
            toggle_icon.classList.remove("fa-eye")
            toggle_icon.classList.add("fa-eye-slash")
        }
    }
}