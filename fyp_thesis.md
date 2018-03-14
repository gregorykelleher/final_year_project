

# Thesis


### Abstract


### Chapter 1 - Introduction


### Chapter 2 - Background, Related Work and Learning


### Chapter 3 - Solution Design

The outcome for the Solution Design Phase was the formulation of a high level model that would reinforce the fabrication of the application's constituting components. From the outset, it was recognised that the model's underlying principles should employ common Software Development methodologies common in industry. In keeping with this objective, a number of approaches were considered.

Ultimately, it was decided that a _Structured Design_ approach would be applied in the Planning Phase, in order to translate the initial vision/scope from the Ideation Phase into an ongoing practical strategy on how to achieve the project's objectives. The purpose of this approach was to define the core solution in detail, parallel to scheduling and time estimates. In addition, a Functional Specification, Solution Architecture and Design plan would be formulated for all aspects of the project.

The Structured Design approach implemented in the Planning Phase is a formalised SLDC (Software Development Life Cycle) methodology framework for building standardised software systems. The main aim of which is to advance the development of software systems in a deliberate, structured and sequential approach, throughout the project's life cycle - from inception to delivery of the final product.

--- 

It is understood that "traditional" methodologies such as Structured Design (or occasionally Structured Analysis) have been superseded in industry by Agile approaches towards Software Development. However, the choice of a Structure Design approach was selected for a number of important reasons, likewise remaining cognisant of its inherent drawbacks.

Agile approaches rely upon on iterative methods and incremental build models for software development, and are well-suited for large-scale software systems with dedicated teams. The concept of modularisation is core to the Agile philosophy, where larger components are sub-divided into individual components (i.e. incremental). This can be equated to the "phased approach" essential to Structure Design development.

However, in scrutinising an Agile SLDC framework for the project, it was deemed that it would infeasible to sufficiently realise all of the necessary stages for an increment within an acceptable period of time. In most instances, an execution of a single Agile increment would consist of planning, inspection and adaptation, solution development/deployment, user UI/UX feedback, modification and testing. 

In consideration of the fact it would be down to single individual responsible to deliver on every aspect of the increment, it was regarded that a Structured Design approach could be more flexible, extensible and less obfuscate. In retrospect, it would've been possible to reduce the number of increments to lessen the workload, however thereupon it would've been more appropriate to adopt a traditional methodology such as Structured Design anyhow.

---

As discussed, a Structured Design SLDC is a technique for analysing/identifying software requirements and developing specifications for translating said documentation into interpreted software procedures and related configurations. As such, structured analysis modelling diagramming is fundamental to this approach and both data and activity models were devised and are included as deliverables.

Combining these individual plans and schedules with data models and diagrams within the context of the Structure Design SLDC, an overall master plan could be culminated for the project. Deliverables from this phase of the project include the following and are described below:

1. Requirement and Functional Specification

- full logical specification

- free from error, ambiguity and inconsistency .etc

- description of functional requirements, e.g. full descriptions of the data and its relationships

- user roles/functions, definitions, entity life histories .etc.

2. Logical Schematic Design

- logical data model (LDMs), activity, entity relationship diagrams, data flow models (DFDs) .etc.

- storyboarding, user dialogues

- functional descriptions, system design, logical data structuring, logical process model

- specifies main methods of interaction in terms of structuring

3. Technology Feasibility Study

4. Functional Specification Document

- function definitions of every function which the users will require of the system

- effect correspondence diagrams (ECDs)

5. Project Schedule

6. Risk Management Document

>> Note that the full documentations are provided in the Supporting Material Directory attached

---

In consideration of the Ideation and Planning Phase, an overall description of the software solution can be illustrated. As defined in the included documentation, the complete software package would consist of three primary entities; namely the mobile application, web-based monitoring portal and the back-end database bridging the two.

The mobile application is designed to operate as a background process on the Patient/Dependent User's mobile device. Its purpose is to perform GPS querying, construct responses, establish connection to the database server, and transmit GeoLocation data to the database.

The database will in turn accept incoming data from the trusted mobile device (pending valid authentication credentials) and store captured Geolocation data in a data structure accessible to the web-based portal.

Finally, the web-based portal available to the Care-giver User will make requests to the database and display the GeoLocation data in a graphical manner. Access to the web-based portal will also require authentication to the database for the Care-giver User, ensuring the confidentiality of the Patient/Dependent User and Care-giver User relationship.

It can therefore be understood that the web-based portal will exist as a front-end Graphical User Interface that will display real-time GeoLocation monitoring of the Dependent User; enabling accurate, discrete and remote observation for the Care-giver User. In addition, the web-based portal will include features to situate a _GeoLocation Fence_ in the environ of the Dependent User. In the likelihood of the Dependent User exiting the confines of the GeoLocation Fence, the web-based portal will transmit a notification alert to the Care-giver User informing them of the occurrence.


### Chapter 4 - Solution Implementation

Analytical Work

Architectural Level

High Level

Packages and Class Diagrams .etc.

Low Level

Method Specifications, Algorithms .etc.

Implementation

### Chapter 5 - Testing and Evaluation


### Chapter 6 - Conclusions and Future Work
