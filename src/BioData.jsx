function BioData({socialInfo, personalInfo, skillSection, inter}) {
    
    return (
        <div class="bio-data">
            {socialInfo}
            {personalInfo}
            {skillSection}
        </div>
    )
}

function sum (a, b) {
    return a + b
}

sum (10, 20)
sum (100, 200)

export default BioData