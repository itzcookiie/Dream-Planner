/*
Things to do now:
    - Add labels to inputs
    - For results, create a circle on the right that says the time in bold and months underneath in small. 
    - When you click on the dream item, it displays only that item. E.g. you have to click an item to display it's results
    - Add own design
    - E.g. maybe they have to fill one form, then page changes to another for another form. Each form has it's own separate HTML.
    - They can edit their information and update the results after

*/

const dreamSubmit = document.querySelector('.dream-submit')
const calculationSubmit = document.querySelector('.calculations-submit')
const olElement = document.querySelector('.dreams-list')
const income = document.querySelector('.income')
const outcome = document.querySelector('.outcome')
const resultsList = document.querySelector('.results-list')

const dreamsData = []

dreamSubmit.addEventListener('click', event => {
    event.preventDefault();
    const { children } = olElement
    const setOfChildren = Object.values(children)
    const data = setOfChildren.map(child => {
        const childData = child.children
        const dreamItemAndPrice = Object.values(childData)
        return dreamItemAndPrice.reduce((acc,val) => 
            val.className === 'dream-item'
            ? ({
                ...acc,
                item: val.value
            })
            : ({
                ...acc,
                price: val.value
            }), {})

    })
    dreamsData.push(...data)
})

calculationSubmit.addEventListener('click', event => {
    event.preventDefault();
    const salary = income.value 
    const expenses = outcome.value 
    const monthlyIncome = salary - expenses

    return dreamsData.map(dream => {
        const time =  +dream.price / monthlyIncome
        const roundedTime = Math.ceil(time)
        let listItem = document.createElement('li')
        listItem.innerText = `${dream.item}: ${roundedTime} months`
        resultsList.appendChild(listItem)
    })
})



/*
Use querySelector for the <ol></ol> (ol element) instead of trying to use numbers to programatically find list element
That way, we don't need to use numbers or do anything recursively. We can just use the length of the children of the ordered list tag.

Way easier to just collect info after submit is pressed rather than doing input event listener on inputs. I think we should ask ourseleves why we are doing what we are doing in code too, not just in our minds. I think it will help us to code better. Reason we are doing input is because we've spent so much time using react tbh, it's the most naturally thing to use input html + input event listener. 

But why can't we just collect info after submit? We was going to do that initially, but we just decided to use input event listener for no reason and it just made things hella complicated... We wanted to finish quickly, how we get there doesn't really matter. The quicker the better - that way we can actually analyse what we've done and know where to go.

That being said, we can finish this today, then try building our other app. Nice prep for our job on Monday!!!!

EDIT: thought of this just now. Isn't it more human to wait until someone is finished filling in a form to collect their data than to just take every single input they do? I think this is a good time to actually think about what we are doing. Functional programming is nice, but what and why? What is functional programming and what is it trying to achieve or do. Might be a good idea to watch the video by that lady on that coding youtube place. I think we should watch it after we finish coding our stuff though, so maybe Sunday evening.
*/