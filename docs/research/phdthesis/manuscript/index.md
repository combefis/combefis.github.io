---
prev: false
next: false
image: budapest.jpg
caption: Budapest, Hungary, May 2019
---

# Manuscript

<img src="/images/books/PhD-thesis-manuscript.jpeg" style="float: right; margin-left: 20px" />

There are more and more automated systems and people are led to interact with them everyday. They are also increasingly complex and exhibit more and more “smart” behaviour. One direct consequence is that it becomes harder for the human operators to drive those systems safely for both the system and the user. Due to that increasing complexity, interactions between users and automated systems are more likely to be error-prone. In particular, inadequately designed interactions may result in the user being surprised while interacting with the system. Several accidents are due to such surprising situations, as it can be testified by real accidents, including the Three Mile Island nuclear meltdown, the lethal radiation doses administered by the Therac 25 medical device or the shutdown of the aircraft of the KAL007 flight.

Human-Computer Interaction (HCI) has been studied for many years by researchers from various fields including psychology, human factors and ergonomics. This thesis follows a recent research direction that considers the use of formal methods to analyse the behavioural aspects of HMI. The focus is put on the actions or events exchanged between an operator and the system being used during an interaction. The work of this thesis builds on its initial inspiration from the recent work of Degani and Heymann that addressed the problem of automatically generating an adequate user interfaces for a given system model. In their work, an adequate user interface refers to one ensuring that potential mode confusion is avoided for the operator.

The main contribution of this thesis is an analysis framework supported by formal methods that can be used to assess whether a system model is prone to potential automation surprises when being used by a human operator. The thesis develops a formalisation of automation surprises. It proposes and precisely characterises the full-control property that captures the fact that interactions between a system and its operator are free of potential automation surprises. It also defines a property, the full-control determinism, that guarantees the existence of a full-control conceptual model for a given system model.

The thesis also defines precisely the minimal full-control conceptual model generation problem. The problem consists in finding a minimal conceptual model of the system model that allows full-control of it, which is only possible for fc-deterministic system models. Such full-control conceptual models can be used to generate artefacts to help the user to better understand them, such as user and training manuals. Three algorithms are proposed to solve the generation problem. The first one is based on Three-Valued Deterministic Finite Automata (3DFA) that are used to characterise the full-control property in terms of traces. The second one is based on a reduction approach inspired by the Paige-Tarjan algorithm that solves coarsest partition problems. Finally, the third one is based on an active learning approach based on the L* algorithm.

The three proposed algorithms have been analysed for correctness and time complexity considerations. Moreover, the proposed framework, and therefore the proposed algorithms, have also been tested on various examples among which a large case study of an autopilot. That latter case study comes from ADEPT, a toolset to support designers in the early phases of the design of automation interfaces. That case study also shows how the proposed methodology could be integrated with ADEPT.

## Resources

- Download the [manuscript as a PDF file](http://hdl.handle.net/2078.1/135942)
- Buy a [paper copy of the manuscript](http://pul.uclouvain.be/fr/livre/?GCOI=29303100470220) from the Presses universitaires de Louvain
