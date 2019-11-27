---
id: arch_appendix
title: Appendix
---

*All Mermaid graphs can also be rendered using [Mermaid Live Editor](https://mermaidjs.github.io/mermaid-live-editor/)*

## A: Source code architecture

### Repository design (main)

```mermaid
graph TD

subgraph Legend
test1[Module]-. Expects interactor .->test2[Module]
test3[Module]-- Depends on -->test4[Module]
test5[Module not importable by all]
test6((Importable by all))
end

subgraph Entrypoint
MAIN((Application_Main))
end

subgraph Core
subgraph Common
    CCH((Helpers))
    CCT[Types]
    CCI[InteractorBase]
end
subgraph CoreDomain1
    CD1I[Interactor]-->CCI
    CD1T[Types/Entities]-.->CD1I
    CD1U[Usecases]-.->CD1I
    CD1U-->CD1T
    CD1T-->CCT
end
subgraph CoreDomain2
    CD2T[Types/Entities]-.->CD2I
    CD2U[Usecases]-.->CD2I
    CD2U-->CD2T
end
end

subgraph Implementations
ID1[Implementation Domain 1]
ID2[Imp.D.2, connections omitted]
end


subgraph Data
DATA_I[Interactors]
DATA_P[Providers]-->DATA_I
end

subgraph Misc
BIN[Binaries and scripts]
DOCS[Docs folder]
E2E[End-to-end tests]
VENDOR((Vendor dependencies))
end

subgraph Config
CONF[Configs]
end

MAIN-->CONF
MAIN-->DATA_P
MAIN-->ID1
MAIN-->ID2

ID1-.->DATA_I
ID1-->CD1U
ID1-->CD1I
```

##### Notes:

* Only the first domain in Implementation and Core are connected to keep things organized
* Core domains can only depend on Core/Common, not on other Core domains
* Core domains cannot depend on vendor dependencies



### Repository design (mobile)

```mermaid
graph TD

M((Main))-->Router
Router-->Screens

subgraph UI
Screens-->Store
Screens-->Layouts
Screens-->Containers
Containers-->Components
end

subgraph Imported-by-all
A((Assets))
A-->Images
A-->Icons
B((Styles))
C((Helpers))
D((Types))
end
```

##### Notes:
* A Styled-Components theme will be passed through a theme-provider
* The assets directory only contains assets that are used in multiple parts of the application, otherwise assets should be grouped in the same folder where they'll be implemented

### Application source code structure

##### Core Domains

* Common
* Users (will also include organisations)
* DataEntries

##### Implementation Domains

* API
* CLI

##### Data Domains

* Database

## B: Cloud infrastructure

```mermaid
graph TD

subgraph Traffic-Sources
PT[Production traffic]
ST[Staging traffic]
TT[Test traffic]
end

PT-->PD
ST-->SD
TT-->TD
PD-.->PDB

subgraph DigitalOcean
    subgraph Droplets
        subgraph TestDroplet
            TD[TestApplicationInstance]
            TD-.->TDB[TestDatabase]
        end
        subgraph StagingDroplet
            SD[StagingApplicationInstance]
            SD-.->SDB[StagingDatabase]
        end
        subgraph ProductionDroplet
            PD[StagingApplicationInstance]
        end
    end

    subgraph Managed-Databases
        PDB[Production Database]
    end

    subgraph Bytecode-Services
        GIT((GitLab))
        LOG((Logserver))
    end
end

```
