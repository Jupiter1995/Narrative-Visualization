# COVID-19 Infection Rate Narrative Visualization 

## Messaging
**What is the message you are trying to communicate with the narrative visualization?**

The main goal of this narrative visualization is for presenting the changes in infection rate by year and also the different change trends among 5 countries. Viewers could use the buttons to go through each year and find out the trend, and based on the policies mentioned in the introduction section, they could achieve a conclusion by themselves.

## Narrative Structure. 
**Which structure was your narrative visualization designed to follow (martini glass, interactive slide show or drop-down story)? How does your narrative visualization follow that structure?** *(All of these structures can include the opportunity to "drill-down" and explore. The difference is where that opportunity happens in the structure.)* <br><br>
The narrative visualization was designed based on **Martini Glass** structure. In the beginning of the visulization, there are some background information and introduction to guide viewers and share observations. Then viewers could use the interative charts to explore and acheive their own conclusion. 

## Visual Structure. 
**What visual structure is used for each scene? How does it ensure the viewer can understand the data and navigate the scene? How does it highlight to urge the viewer to focus on the important parts of the data in each scene? How does it help the viewer transition to other scenes, to understand how the data connects to the data in other scenes?**<br><br>
A bar plot was used for each scene as the main visual structure and supported by legend, axis labels, colors and annotations. With the legend and axis labels, viewers could easily understand what they are looking at and find out the difference. Also, the year buttons have been designed as a part of the visual structure to help viewers navigate from scene to scene. The country bar with the highest infection rate was highlighted with red color, which keep viewers focus on which country has the highest rate. <br>

In addition, different rates were assigned to a different color, which helps viewer stay connected between different scenes. Furthermore, the changes in the bar heights from year to year for the same country were smoothed, so the viewers could see how the data changed from scene to scene or year to year.

## Scenes and Visual Ordering. 
**What are the scenes of your narrative visualization?  How are the scenes ordered, and why**<br><br>
The scenes in the narrative visualization are the bar charts under different years. Each year will be treated as one scene.<br> The scenes were ordered based on the time, and the first scene was in 2020. The buttons were ordered based on time to reflect the order of the scene. In time order, viewers could have a better idea about the changes in time, and it's also easier for them to find the trends. This visualization was designed to be interactive, so viewers could choose to skip a particular year or start from 2022 and move to 2020. Viewers have the flexibility to choose which order they want to follow or use their own when exploring the scenes.

## Annotations. 
**What template was followed for the annotations, and why that template? How are the annotations used to support the messaging? Do the annotations change within a single scene, and if so, how and why**<br><br>
A modified annotation template from d3-annotation was used for this narrative visualization. The base of the annotation used is d3-annotationCallout and was customed the size, end connector, and so on. This annotation template could provide clear guidance for the viewers to see what is pointed out without sacrificing the chart quality.<br>
Annotations keep the same in the single scene and across the different scenes. With the annotations, viewers will be quickly guided to focus on the countries with the highest and lowest infection rates, which helps them conclude the effects of different policies.


## Parameters. 
**What are the parameters of the narrative visualization? What are the states of the narrative visualization? How are the parameters used to define the state and each scene?**<br><br>
Year buttons, the control parameter, controlled the narrative visualization. By changing the year parameter (button), the scene will be changed to the corresponding year. While switching from scene to scene (year chart to another year chart) by clicking on different buttons, the state changes include the button color, bar colors, and bar heights. The bar color indicates the infection rate order among the five countries, and the country with the highest infection rate is highlighted in red. The bar height shows the exact infection rate of a particular country in a specific year. 

## Triggers. 
**What are the triggers that connect user actions to changes of state in the narrative visualization? What affordances are provided to the user to communicate to them what options are available to them in the narrative visualization?**
The triggers for connecting user actions to the visualization are the year buttons. While clicking on different years, the bar colors and heights, as well as the button's color, will be changed accordingly to show the actual infection rate in the particular year. Above those buttons, a short introduction is prepared to communicate to the users what options are available and how they can interact with the charts.
