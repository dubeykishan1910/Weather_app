<template>
<section>
    <div class="container">
        <header> Registration Form</header>
        <form action="#" class="form">
            <div class="input-box">
                <label for="name">Full Name</label>
                <input type="text" id="name" placeholder="Enter full name" required>
            </div>
            <div class="input-box">
                <label for="Email">Email Address</label>
                <input type="email" id="Email" placeholder="Enter email address" required>
            </div>

            <div class="column">
                <div class="input-box">
                    <label for="phone">Phone Number</label>
                    <input type="number" id="phone" placeholder="Enter Phone Number" required>
                </div>
                <div class="input-box">
                    <label for="Birth">Birth Date</label>
                    <input type="date" id="Birth" placeholder="Enter birth date" required>
                </div>
            </div>

            <div class="gender-box">
                <h3>Gender</h3>
                <div class="gender-option">
                    <div class="gender">
                        <input type="radio" id="check-male" name="gender" checked />
                        <label for="check-male">Male</label>
                    </div>

                    <div class="gender">
                        <input type="radio" id="check-femail" name="gender" />
                        <label for="check-femail">Female</label>
                    </div>

                    <div class="gender">
                        <input type="radio" id="check-other" name="gender" />
                        <label for="check-other">Prefer not to say</label>
                    </div>

                </div>
            </div>

            <div class="input-box addres">
                <label for="add">Address</label>
                <input type="text" id="add" placeholder="Enter street address" required>
                <input type="text" id="add" placeholder="Enter street address line 2" required>
                <div class="column">
                    <div class="select-box">
                        <select>
                            <option hidden>Country</option>
                            <option>India</option>
                            <option>America</option>
                            <option>Japan</option>
                            <option>Nepal</option>
                        </select>
                    </div>

                    <input type="text" id="add" placeholder="Enter your city" required>
                </div>

                <div class="column">
                    <input type="text" id="add" placeholder="Enter your region" required>
                    <input type="number" id="add" placeholder="Enter postal code" required>
                </div>

            </div>

            <button>Submit</button>
        </form>
    </div>
</section>
</template>

<script>
export default {
    name: "FormC"
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&family=Ubuntu:wght@300&display=swap');

section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem;
    background-color: #1e3bbdb3
}

.container {
    font-family: 'Poppins', sans-serif;
    position: relative;
    max-width: 900px;
    width: 100%;
    background-color: rgb(247, 247, 249);
    padding: 30px;
    border-radius: 1em;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);

}

.container header {
    font-size: 1.5rem;
    color: #333;
    font-weight: 500;
    text-align: center;
}

.container .form {
    margin-top: 16px;
    min-height: 490px;

}

.form .input-box {
    width: 100%;
    margin-top: 20px;
}

.input-box label {
    color: #333;
}

.form :where(.input-box input, .select-box) {
    position: relative;
    height: 50px;
    width: 100%;
    outline: none;
    font-size: 1rem;

    margin-top: 8px;
    border: 1px solid #ddd;
    border-radius: 6px;
    padding: 0 15px;

}
.input-box input:focus{
    box-shadow: 0 1px 0 rgba(0, 0, 0, .1);
}

/* genderr */
.form .column {
    display: flex;
    column-gap: 15px;
}

.form .gender-box {
    margin-top: 20px;
}

.gender-box h3 {
    color: #333;
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 8px;
}

.form :where(.gender-option, .gender) {
    display: flex;
    align-items: center;
    column-gap: 15px;
    flex-wrap: wrap;
}

.form .gender {
    column-gap: 5px;

}

.form :where(.gender input, .gender label) {
    cursor: pointer;
}

.addres :where(input, .select-box) {
    margin-top: 15px;
}

/* country selection */
.select-box select {
    height: 100%;
    width: 100%;
    outline: none;
    border: none;
    color: #707070;
    font-size: 1rem;
}

/* button submit */
.form button {
    height: 55px;
    width: 100%;
    color: #fff;
    font-size: 1rem;
    border: none;
    margin-top: 30px;
    cursor: pointer;
    border-radius: 6px;
    font-weight: 400;
    transition: all 0.2s ease;
    background: rgb(130, 106, 251);
}

.form button:hover {
    background: rgb(88, 56, 250);
}

@media (max-width:500px) {
    .form .column {
        flex-wrap: wrap;
    }

    .form :where(.gender-option, .gender) {
        row-gap: 15px;
    }

    section{
        padding: 2rem;
    }
}
</style>
