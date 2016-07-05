# Datex2 to linked Datex 2

## Case study

Datafeed from <http://verkeercentrum.be>.

### Current situation

The datex2-feed

We noticed that the `payloadPublication` contains multiple `situation`s. Each of those has an ID in the form of `EVT2538274` and a certain version. This can contain multiple `situationRecord`s (but contains one or two) which also has an id, which is for example `2538274-A-NLS`. We notice here that the id number is the same for both the `situation` as the `situationRecord`, but with `M-RRW`added. This means each of the records is unique as well.

A single `situation` can look like this:

```xml
<ns2:situation id="EVT2703089" version="2">
    <ns2:situationVersionTime>2016-06-22T15:54:53.758+02:00</ns2:situationVersionTime>
    <ns2:headerInformation>
        <ns2:confidentiality>noRestriction</ns2:confidentiality>
        <ns2:informationStatus>real</ns2:informationStatus>
    </ns2:headerInformation>
    <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2703089-A-NLS" version="2">
        <ns2:situationRecordCreationTime>2016-05-24T23:47:28.860+02:00</ns2:situationRecordCreationTime>
        <ns2:situationRecordVersionTime>2016-06-22T15:54:53.758+02:00</ns2:situationRecordVersionTime>
        <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
        <ns2:validity>
            <ns2:validityStatus>active</ns2:validityStatus>
            <ns2:validityTimeSpecification>
                <ns2:overallStartTime>2016-05-24T23:47:28.860+02:00</ns2:overallStartTime>
            </ns2:validityTimeSpecification>
        </ns2:validity>
        <ns2:groupOfLocations xsi:type="ns2:Linear">
            <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                <ns2:alertCDirection>
                    <ns2:alertCDirectionCoded>positive</ns2:alertCDirectionCoded>
                </ns2:alertCDirection>
                <ns2:alertCMethod4PrimaryPointLocation>
                    <ns2:alertCLocation>
                        <ns2:specificLocation>6220</ns2:specificLocation>
                    </ns2:alertCLocation>
                    <ns2:offsetDistance>
                        <ns2:offsetDistance>1187</ns2:offsetDistance>
                    </ns2:offsetDistance>
                </ns2:alertCMethod4PrimaryPointLocation>
                <ns2:alertCMethod4SecondaryPointLocation>
                    <ns2:alertCLocation>
                        <ns2:specificLocation>6226</ns2:specificLocation>
                    </ns2:alertCLocation>
                    <ns2:offsetDistance>
                        <ns2:offsetDistance>3982</ns2:offsetDistance>
                    </ns2:offsetDistance>
                </ns2:alertCMethod4SecondaryPointLocation>
            </ns2:alertCLinear>
        </ns2:groupOfLocations>
        <ns2:complianceOption>advisory</ns2:complianceOption>
        <ns2:roadOrCarriagewayOrLaneManagementType>narrowLanes</ns2:roadOrCarriagewayOrLaneManagementType>
    </ns2:situationRecord>
    <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2703089-A-RNL" version="2">
        <ns2:situationRecordCreationTime>2016-05-24T23:47:28.860+02:00</ns2:situationRecordCreationTime>
        <ns2:situationRecordVersionTime>2016-06-22T15:54:53.758+02:00</ns2:situationRecordVersionTime>
        <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
        <ns2:validity>
            <ns2:validityStatus>active</ns2:validityStatus>
            <ns2:validityTimeSpecification>
                <ns2:overallStartTime>2016-05-24T23:47:28.860+02:00</ns2:overallStartTime>
            </ns2:validityTimeSpecification>
        </ns2:validity>
        <ns2:groupOfLocations xsi:type="ns2:Linear">
            <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                <ns2:alertCDirection>
                    <ns2:alertCDirectionCoded>positive</ns2:alertCDirectionCoded>
                </ns2:alertCDirection>
                <ns2:alertCMethod4PrimaryPointLocation>
                    <ns2:alertCLocation>
                        <ns2:specificLocation>6220</ns2:specificLocation>
                    </ns2:alertCLocation>
                    <ns2:offsetDistance>
                        <ns2:offsetDistance>1187</ns2:offsetDistance>
                    </ns2:offsetDistance>
                </ns2:alertCMethod4PrimaryPointLocation>
                <ns2:alertCMethod4SecondaryPointLocation>
                    <ns2:alertCLocation>
                        <ns2:specificLocation>6226</ns2:specificLocation>
                    </ns2:alertCLocation>
                    <ns2:offsetDistance>
                        <ns2:offsetDistance>3982</ns2:offsetDistance>
                    </ns2:offsetDistance>
                </ns2:alertCMethod4SecondaryPointLocation>
            </ns2:alertCLinear>
        </ns2:groupOfLocations>
        <ns2:complianceOption>advisory</ns2:complianceOption>
        <ns2:roadOrCarriagewayOrLaneManagementType>newRoadworksLayout</ns2:roadOrCarriagewayOrLaneManagementType>
    </ns2:situationRecord>
</ns2:situation>
```

### What to change

A first change, regardless of if the decision to serve linked datex is to serve the datafeed with a MIME contenttype of `text/xml`instead of what it's currently, `text/plain`. It's easier and better to work with a file that's served with the correct MIME type since you can infer extra information without having to parse it on beforehand.

Secondly we'd suggest a clear to find page that would give extra information about the feed, like the page on `opendata.vlaanderen.be`, but on the page of the Verkeercentrum itself, this would encourage reuse and shine a light on its existence. Furthermore it'd be useful to suggest being listed on the page on the site of `datex2` that lists some of the countries using the system. When listed on places like those, it'll be easier to find.

With this information we can suggest three different strategies to convert this to linked data. First of all, since there is already a method to create an id for every `situation`, it's best to keep this id as an identifier and then make it available from the internet. This is not the easiest, nor the best solution, since it requires crawling the datafeed, parsing it and returning both the whole feed, as a (html) file with the same unique identifiers. The major problem is that since the datafeed only serves the `situation`s that are still valid today, we can not make a identifier to inactive `situation`s.

The second method is the preferred method, and that's where *you* add a way to access the data. Currently you're serving a dynamic xml feed, this could be changed to simply add a `URI` for every identifier, and additionally create either a dynamic webpage that makes every `situation` and `situationRecord` available as a hash (`#`/`id`) available on that page.

The third method would be to take the data that was returning as `xml/datex2`, and returning `JSON-ld` as well as creating the page suggested in the second method. Because `xml` isn't ideal to work with and takes quite a significant amount more bandwith than `JSON` because of the repeated tags etc and `JSON` is a lot faster to parse and transform this would be a good change according to us.

Furthermore what needs to happen is that for each of the terms (`situation`, `situationRecord`, `roadOrCarriagewayOrLaneManagementType` ...) there should be a URI towards the definition of that term, which you can find at the page for linked datex.

Furthermore we notice that there's no clear method to cross-reference between the identifiers listed here, and the identifiers listed in the rss feed. These look like <http://www.verkeerscentrum.be/verkeersinfo/kaart?erp=3dQ6yOtK%2BduVafS2AWRUvQZ%2FRTIpQ%2Fs9FBKWmSbdck9yOc77kZk73rhyXqPHKGxX%2BK5eWNz7AusKfL4M7La9S4G4lT1d%2FdUnm1wHEHR6IPFa5BTT9p8Pdw%3D%3D> for example, a guid (`nr523u009h-jh9u7x07nk`). By combining these two efforts it would be possible to do your own calculations and mappings based on that information.

### Why to change

If the identifiers are accessible as URIs, then you can reuse those identifiers as another provider of data, for example very useful for `situation`s that happen across borders (also counting language borders).

This will promote reuse and make Vlaanderen a front player in the domain of Linked Open Data.

### What we will do

We will parse the datafeed periodically, convert it to `JSON-ld` by adding `@context` for the terms defined by `datex` and creating our own URI for each of the `situation`s. Furthermore we'll create a page that defines each of the `situation`s that are happening and have happened.

### Sources

what|url
---|---
datex2 verkeercentrum|<http://www.verkeerscentrum.be/uitwisseling/datex2full>
linked datex2|<http://vocab.datex.org/>
datex2 usages|<http://www.datex2.eu/datex-node>
JSON-ld|<http://json-ld.org/>
Open Data Vlaanderen|<http://opendata.vlaanderen.be/dataset/datex2-feed-verkeerscentrum-vlaanderen>
