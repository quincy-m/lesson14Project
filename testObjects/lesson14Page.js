var employeeManager = {
    newEmployeeTest: function(data) {
    this
    .click('@addEmployee')
    .pause(1000)
    .waitForElementPresent(data.newNumber)
    .click(data.newNumber)
    .expect.element('@nameEntry').value.to.equal('New Employee')
    this
    .clearValue('@nameEntry')
    .setValue('@nameEntry', data.name)
    .clearValue('@phoneEntry')
    .setValue('@phoneEntry', data.phone)
    .clearValue('@emailEntry')
    .setValue('@emailEntry', data.email)
    .clearValue('@titleEntry')
    .setValue('@titleEntry', data.title)
    .click('@saveButton')
    .click('@gillianJacobs')
    .click(data.newNumber)
    .expect.element('@nameEntry').value.to.equal(data.name)
    this
    .expect.element('@phoneEntry').value.to.equal(data.phone)
    this
    .expect.element('@emailEntry').value.to.equal(data.email)
    this
    .expect.element('@titleEntry').value.to.equal(data.title)
    this
    .click('@deleteButton')
    .api.acceptAlert()
    return this
}
}
var employeeManager2 = {
    searchBarTest: function(data) {
    this
    .setValue('@searchBar', 'Allie Brie')
    .click('@clearSearchButton')
    .expect.element('@searchBar').value.to.equal('')
    this
    .setValue('@searchBar', 'Allie Brie')
    .expect.element('@employeeList').text.to.contain('Allie Brie')
    return this
    }
}


module.exports = {
    url: 'https://devmountain-qa.github.io/employee-manager-v2/build/index.html',
    commands: [employeeManager, employeeManager2],
    elements: {
        searchBar: 'input[name="searchBox"]',
        clearSearchButton: 'button[name="clearSearch"]',
        troyBarnes: 'li[name="employee611"]',
        gillianJacobs: 'li[name="employee618"]',
        nameEntry: 'input[name="nameEntry"]',
        phoneEntry: 'input[name="phoneEntry"]',
        emailEntry: 'input[name="emailEntry"]',
        titleEntry: 'input[name="titleEntry"]',
        idValue: 'span[name="employeeID"]',
        saveButton: 'button[name="save"]',
        cancelButton: 'button[name="cancel"]',
        deleteButton: 'button[name="delete"]',
        addEmployee:{
            selector: '//li[@class="listText"][last()]',
            locateStrategy: 'xpath'
        },
        newEmployee1: {
            selector: '//li[@class="listText"][last()-1]',
            locateStrategy: 'xpath'
        },
        employeeList: 'ul[class="listContainer"]'
    }
}