function theatrePromotions(day, age){

    switch (day){

        case 'Weekday':

            if(age < 0 || age > 122){

                console.log("Error!");

            } else if(age < 19){

                console.log("12$");

            } else if(age < 65){

                console.log("18$");

            } else if(age < 123){

                console.log("12$");

            }

        break;

        case 'Weekend':

        if(age < 0 || age > 122){

            console.log("Error!");

        } else if(age < 19){

            console.log("15$");

        } else if(age < 65){

            console.log("20$");

        } else if(age < 123){

            console.log("15$");

        }

        break;

        case 'Holiday':

        if(age < 0 || age > 122){

            console.log("Error!");

        } else if(age < 19){

            console.log("5$");

        } else if(age < 65){

            console.log("12$");

        } else if(age < 123){

            console.log("10$");

        }

        break;

    }

}

theatrePromotions("Weekday", 42);