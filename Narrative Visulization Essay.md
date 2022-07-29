# COVID-19 Infection Rate Narrative Visualization 

**Linhan Yang (linhany2@illinois.edu)**

<style>
blue { color: steelblue }
yellow { color: yellow }
</style>

<blue>
<h2> Messaging </h2>
<strong>What is the message you are trying to communicate with the narrative visualization?</strong>
</blue>

The main goal of this narrative visualization is for presenting the changes in infection rate by year and also the different change trends among 5 countries. Viewers could use the buttons to go through each year and find out the trend, and based on the policies mentioned in the introduction section, they could achieve a conclusion by themselves.

<blue>
<h2> Narrative Structure </h2>
<strong>Which structure was your narrative visualization designed to follow (martini glass, interactive slide show or drop-down story)? How does your narrative visualization follow that structure?</strong>
<i> (All of these structures can include the opportunity to "drill-down" and explore. The difference is where that opportunity happens in the structure.)</i>
</blue>

The narrative visualization was designed based on **Martini Glass** structure.<br>
In the beginning of the visulization, the "Author-Driven Content" was prepared to guid the viewers (e.g., background information, introduction, observations). Following the "Author-Driven Content", it is the "Reader-Driven Content", where viewers could interate with charts and explore to acheive their own conclusion. 

<blue>
<h2> Visual Structure </h2>
<strong>What visual structure is used for each scene? How does it ensure the viewer can understand the data and navigate the scene? How does it highlight to urge the viewer to focus on the important parts of the data in each scene? How does it help the viewer transition to other scenes, to understand how the data connects to the data in other scenes?</strong>
</blue>

**Structure:** A bar plot was used for each scene as the main visual structure and supported by legend, axis labels, colors and annotations. With the legend and axis labels, viewers could easily understand what they are looking at and find out the difference. Also, the year buttons have been designed as a part of the visual structure to help viewers navigate from scene to scene.<br> 

**Highlighting:** The year buttons will be highlighted as blue to indicate which year the viewers are looking at. In addition, the country bar with the highest infection rate was highlighted with red color in each scene, which keep viewers focus on which country has the highest rate. Furthermore, annotations for the highest and lowest infection rate was included in each scene. this will not only highlight the countries with lowest and highest rate but also help viewers to bring the key information when they switch to the next scene.<br>

**Transision:** On top of that, different rates were assigned to a different color and the colors are consistence from scene to scene, which helps viewer stay connected between different scenes. Furthermore, the changes in the bar heights from year to year for the same country were smoothed, so the viewers could easily capture how the data changed from scene to scene or year to year. At last, the annotations are consistence across the scenes, which help viewers smooth the transition.

<blue>
<h2> Scenes and Visual Ordering </h2>
<strong>What are the scenes of your narrative visualization?  How are the scenes ordered, and why?</strong>
</blue>

The scenes in the narrative visualization are the bar charts under different years. Each year's bar charts will be treated as one scene. There are total three scenes<br> The scenes were ordered based on the time, and the first scene was in 2020. The buttons were ordered chronologically to reflect the order of the scene. This way, viewers could have a better idea about the changes in time, and it's also easier for them to find the trends.<br>
To note, this visualization was designed to be interactive, so viewers could choose to skip a particular year or view the scenes in backwards (2022 -> 2020). Following the designed order is not required.

<blue>
<h2> Annotations </h2>
<strong>What template was followed for the annotations, and why that template? How are the annotations used to support the messaging? Do the annotations change within a single scene, and if so, how and why?</strong>
</blue>

A modified annotation template from d3-annotation was used for this narrative visualization. Same title, label, color and connector formats were used for all the annotations. This annotation template could provide clear guidance for the viewers to focus on the key information highlighted without sacrificing the chart quality.<br>
Annotations keep the same in the single scene and across the different scenes. With the annotations, viewers will be quickly guided to focus on the countries with the highest and lowest infection rates, which helps them conclude the effects of different policies.

<blue>
<h2> Parameters </h2>
<strong>What are the parameters of the narrative visualization? What are the states of the narrative visualization? How are the parameters used to define the state and each scene?</strong>
</blue>

Year buttons, working as the control parameter, controlled the narrative visualization. By changing the year parameter (button), the scene will be changed to the corresponding year.<br>
While switching from scene to scene (year chart to another year chart) by clicking on different buttons, the state changes include the button color, bar colors, and bar heights. The bar color indicates the infection rate order among the five countries, and the country with the highest infection rate is highlighted in red. The bar height shows the exact infection rate of a particular country in a specific year. 

<blue>
<h2> Triggers </h2>
<strong>What are the triggers that connect user actions to changes of state in the narrative visualization? What affordances are provided to the user to communicate to them what options are available to them in the narrative visualization?</strong>
</blue>

The trigger for connecting user actions to the visualization are clicking year buttons. While clicking on different years, the bar colors and heights, as well as the button's color, will be changed accordingly to show the actual infection rate in the particular year.<br> 
Above those buttons, a short introduction is prepared to communicate to the users what options are available and how they can interact with the charts.
