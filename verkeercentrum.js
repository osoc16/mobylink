var fs = require('fs');
var xml2js = require('xml2js');

var xml = `
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ns2:d2LogicalModel modelBaseVersion="2" xmlns:ns2="http://datex2.eu/schema/2/2_0" xmlns="http://verkeerscentrum.be/tcc.backend/xsd/datex2">
    <ns2:exchange>
        <ns2:supplierIdentification>
            <ns2:country>be</ns2:country>
            <ns2:nationalIdentifier>BETICV</ns2:nationalIdentifier>
        </ns2:supplierIdentification>
    </ns2:exchange>
    <ns2:payloadPublication xsi:type="ns2:SituationPublication" lang="nl" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
        <ns2:publicationTime>2016-07-04T11:09:25.492+02:00</ns2:publicationTime>
        <ns2:publicationCreator>
            <ns2:country>be</ns2:country>
            <ns2:nationalIdentifier>BETICV</ns2:nationalIdentifier>
        </ns2:publicationCreator>
        <ns2:situation id="EVT2406724" version="2">
            <ns2:situationVersionTime>2016-03-15T13:14:32.335+01:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2406724-M-RNL" version="2">
                <ns2:situationRecordCreationTime>2016-02-23T18:38:43.452+01:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-03-15T13:14:32.335+01:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-02-23T18:38:43.452+01:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>20714</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>4100</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>20710</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>2626</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>newRoadworksLayout</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2778133" version="1">
            <ns2:situationVersionTime>2016-06-14T08:02:24.881+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2778133-M-RCD" version="1">
                <ns2:situationRecordCreationTime>2016-06-14T08:02:26.169+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-06-14T08:02:24.881+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-06-14T08:02:26.169+02:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>22109</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>210</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>22108</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>569</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>roadClosed</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2751564" version="1">
            <ns2:situationVersionTime>2016-06-06T11:17:15.657+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2751564-M-RCD" version="1">
                <ns2:situationRecordCreationTime>2016-06-06T11:17:15.949+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-06-06T11:17:15.657+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-06-06T11:17:15.949+02:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>18604</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>2271</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>18602</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>2579</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>roadClosed</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2538274" version="175">
            <ns2:situationVersionTime>2016-07-04T10:32:24.882+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2538274-A-NLS" version="175">
                <ns2:situationRecordCreationTime>2016-04-09T07:02:27.162+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-07-04T10:32:24.882+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-04-09T07:02:27.162+02:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>24006</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1984</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>24004</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>870</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>narrowLanes</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2432221" version="1">
            <ns2:situationVersionTime>2016-03-02T10:04:17.602+01:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2432221-M-RCD" version="1">
                <ns2:situationRecordCreationTime>2016-03-02T10:04:17.652+01:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-03-02T10:04:17.602+01:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-03-02T10:04:17.652+01:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>29678</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>17</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>29676</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>2020</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>roadClosed</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2858288" version="1">
            <ns2:situationVersionTime>2016-07-04T11:08:00.000+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:AbnormalTraffic" id="2858288-M-LS2" version="1">
                <ns2:situationRecordCreationTime>2016-07-04T11:08:25.300+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-07-04T11:08:00.000+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-07-04T11:08:25.300+02:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>5806</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>3441</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>5807</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>316</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:abnormalTrafficType>queuingTraffic</ns2:abnormalTrafficType>
                <ns2:queueLength>343</ns2:queueLength>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2428363" version="4">
            <ns2:situationVersionTime>2016-03-04T14:44:06.367+01:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2428363-A-NLS" version="4">
                <ns2:situationRecordCreationTime>2016-03-01T16:18:54.565+01:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-03-04T14:44:06.367+01:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-03-01T16:18:54.565+01:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>29630</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>996</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>29632</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>57</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>narrowLanes</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2428363-A-RNL" version="4">
                <ns2:situationRecordCreationTime>2016-03-01T16:18:54.565+01:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-03-04T14:44:06.367+01:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-03-01T16:18:54.565+01:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>29630</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>996</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>29632</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>57</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>newRoadworksLayout</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2471337" version="1">
            <ns2:situationVersionTime>2016-03-15T00:02:24.882+01:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2471337-M-RCD" version="1">
                <ns2:situationRecordCreationTime>2016-03-15T00:02:26.606+01:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-03-15T00:02:24.882+01:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-03-15T00:02:26.606+01:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>21302</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>3329</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>21300</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>30</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>roadClosed</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2445040" version="1">
            <ns2:situationVersionTime>2016-03-05T00:02:25.140+01:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2445040-A-NLS" version="1">
                <ns2:situationRecordCreationTime>2016-03-05T00:02:26.142+01:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-03-05T00:02:25.140+01:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-03-05T00:02:26.142+01:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>29632</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>59</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>29630</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>995</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>narrowLanes</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2445040-A-RNL" version="1">
                <ns2:situationRecordCreationTime>2016-03-05T00:02:26.142+01:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-03-05T00:02:25.140+01:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-03-05T00:02:26.142+01:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>29632</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>59</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>29630</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>995</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>newRoadworksLayout</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2857327" version="1">
            <ns2:situationVersionTime>2016-07-04T00:02:24.936+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2857327-A-RNL" version="1">
                <ns2:situationRecordCreationTime>2016-07-04T00:02:29.805+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-07-04T00:02:24.936+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-07-04T00:02:29.805+02:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>14510</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>566</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>14512</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>2156</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>newRoadworksLayout</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2621218" version="1">
            <ns2:situationVersionTime>2016-05-01T00:02:24.881+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2621218-M-RCD" version="1">
                <ns2:situationRecordCreationTime>2016-05-01T00:02:25.378+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-05-01T00:02:24.881+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-05-01T00:02:25.378+02:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>19829</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>2478</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>19832</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>284</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>roadClosed</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2819531" version="1">
            <ns2:situationVersionTime>2016-06-24T11:07:25.089+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2819531-M-RCD" version="1">
                <ns2:situationRecordCreationTime>2016-06-24T11:07:28.586+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-06-24T11:07:25.089+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-06-24T11:07:28.586+02:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>18440</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>8</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>18438</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1229</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>roadClosed</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2759717" version="1">
            <ns2:situationVersionTime>2016-06-08T10:50:41.555+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2759717-M-RCD" version="1">
                <ns2:situationRecordCreationTime>2016-06-08T10:50:41.662+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-06-08T10:50:41.555+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-06-08T10:50:41.662+02:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>30040</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>682</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>20922</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>2263</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>roadClosed</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2703352" version="1">
            <ns2:situationVersionTime>2016-05-25T06:43:57.788+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2703352-M-RCD" version="1">
                <ns2:situationRecordCreationTime>2016-05-25T06:43:57.789+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-05-25T06:43:57.788+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-05-25T06:43:57.789+02:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>20414</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1150</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>20412</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>5669</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>roadClosed</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2857994" version="1">
            <ns2:situationVersionTime>2016-07-04T09:06:53.675+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:MaintenanceWorks" id="2857994-M-RWK" version="1">
                <ns2:situationRecordCreationTime>2016-07-04T09:06:53.020+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-07-04T09:06:53.675+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-07-04T09:06:53.020+02:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Point">
                    <ns2:alertCPoint xsi:type="ns2:AlertCMethod4Point">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>5706</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>2399</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                    </ns2:alertCPoint>
                </ns2:groupOfLocations>
                <ns2:roadMaintenanceType>roadworks</ns2:roadMaintenanceType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2002961" version="2">
            <ns2:situationVersionTime>2016-02-16T14:54:14.510+01:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2002961-A-NLS" version="2">
                <ns2:situationRecordCreationTime>2015-10-09T18:08:34.791+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-02-16T14:54:14.510+01:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2015-10-09T18:08:34.791+02:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>22431</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>7906</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>22432</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1249</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>narrowLanes</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2002961-A-RNL" version="2">
                <ns2:situationRecordCreationTime>2015-10-09T18:08:34.791+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-02-16T14:54:14.510+01:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2015-10-09T18:08:34.791+02:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>22431</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>7906</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>22432</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1249</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>newRoadworksLayout</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2857343" version="2">
            <ns2:situationVersionTime>2016-07-04T06:26:17.781+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:VehicleObstruction" id="2857343-M-RMV" version="2">
                <ns2:situationRecordCreationTime>2016-07-04T05:02:28.723+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-07-04T06:26:17.781+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-07-04T05:02:28.723+02:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>6404</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>4091</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>6410</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1251</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:vehicleObstructionType>slowMovingMaintenanceVehicle</ns2:vehicleObstructionType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2490950" version="1">
            <ns2:situationVersionTime>2016-03-21T15:03:53.834+01:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2490950-M-RCD" version="1">
                <ns2:situationRecordCreationTime>2016-03-21T15:03:53.834+01:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-03-21T15:03:53.834+01:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-03-21T15:03:53.834+01:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>18902</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>6014</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>18901</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>425</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>roadClosed</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2771041" version="1">
            <ns2:situationVersionTime>2016-06-11T05:02:24.883+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2771041-A-NLS" version="1">
                <ns2:situationRecordCreationTime>2016-06-11T05:02:28.752+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-06-11T05:02:24.883+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-06-11T05:02:28.752+02:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>5400</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>295</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>11068</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>340</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>narrowLanes</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2797166" version="2">
            <ns2:situationVersionTime>2016-06-23T12:47:54.924+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2797166-M-RNL" version="2">
                <ns2:situationRecordCreationTime>2016-06-17T21:02:27.212+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-06-23T12:47:54.924+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-06-17T21:02:27.212+02:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>11102</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1482</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>11100</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>325</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>newRoadworksLayout</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2538275" version="175">
            <ns2:situationVersionTime>2016-07-04T10:32:24.882+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2538275-A-NLS" version="175">
                <ns2:situationRecordCreationTime>2016-04-09T07:02:27.239+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-07-04T10:32:24.882+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-04-09T07:02:27.239+02:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>24004</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>873</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>24006</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1987</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>narrowLanes</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2402608" version="1">
            <ns2:situationVersionTime>2016-02-23T06:02:24.883+01:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2402608-A-RNL" version="1">
                <ns2:situationRecordCreationTime>2016-02-23T06:02:27.816+01:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-02-23T06:02:24.883+01:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-02-23T06:02:27.816+01:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>22422</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>3701</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>22426</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>2197</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>newRoadworksLayout</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2771853" version="1">
            <ns2:situationVersionTime>2016-06-12T05:02:24.883+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2771853-A-NLS" version="1">
                <ns2:situationRecordCreationTime>2016-06-12T05:02:29.821+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-06-12T05:02:24.883+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-06-12T05:02:29.821+02:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>11068</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>340</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>5400</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>295</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>narrowLanes</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2771853-A-RNL" version="1">
                <ns2:situationRecordCreationTime>2016-06-12T05:02:29.821+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-06-12T05:02:24.883+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-06-12T05:02:29.821+02:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>11068</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>340</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>5400</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>295</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>newRoadworksLayout</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2766545" version="2">
            <ns2:situationVersionTime>2016-06-28T17:34:00.085+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2766545-A-NLS" version="2">
                <ns2:situationRecordCreationTime>2016-06-10T06:02:25.818+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-06-28T17:34:00.085+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-06-10T06:02:25.818+02:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>47562</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>6</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>47566</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>983</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>narrowLanes</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2766545-A-RNL" version="2">
                <ns2:situationRecordCreationTime>2016-06-10T06:02:25.818+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-06-28T17:34:00.085+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-06-10T06:02:25.818+02:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>47562</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>6</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>47566</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>983</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>newRoadworksLayout</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2794664" version="2">
            <ns2:situationVersionTime>2016-06-20T15:09:18.336+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:MaintenanceWorks" id="2794664-M-RRW" version="2">
                <ns2:situationRecordCreationTime>2016-06-17T14:52:16.119+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-06-20T15:09:18.336+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-06-17T14:52:16.119+02:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>18528</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1441</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>18530</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>107</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:roadMaintenanceType>roadsideWork</ns2:roadMaintenanceType>
            </ns2:situationRecord>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2794664-A-RNL" version="2">
                <ns2:situationRecordCreationTime>2016-06-17T14:52:16.119+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-06-20T15:09:18.336+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-06-17T14:52:16.119+02:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>18528</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1441</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>18530</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>107</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>newRoadworksLayout</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2492236" version="2">
            <ns2:situationVersionTime>2016-03-22T05:48:24.784+01:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2492236-A-NLS" version="2">
                <ns2:situationRecordCreationTime>2016-03-22T05:02:28.246+01:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-03-22T05:48:24.784+01:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-03-22T05:02:28.246+01:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>5810</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>705</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>5808</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>479</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>narrowLanes</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2496584" version="1">
            <ns2:situationVersionTime>2016-03-23T05:02:24.883+01:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2496584-A-NLS" version="1">
                <ns2:situationRecordCreationTime>2016-03-23T05:02:26.796+01:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-03-23T05:02:24.883+01:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-03-23T05:02:26.796+01:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>5808</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>476</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>5810</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>705</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>narrowLanes</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2496584-A-RNL" version="1">
                <ns2:situationRecordCreationTime>2016-03-23T05:02:26.796+01:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-03-23T05:02:24.883+01:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-03-23T05:02:26.796+01:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>5808</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>476</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>5810</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>705</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>newRoadworksLayout</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2858093" version="60">
            <ns2:situationVersionTime>2016-07-04T11:08:00.000+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:AbnormalTraffic" id="2858093-M-LS2" version="60">
                <ns2:situationRecordCreationTime>2016-07-04T09:46:25.323+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-07-04T11:08:00.000+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-07-04T09:46:25.323+02:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>11119</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>279</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>11104</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1577</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:abnormalTrafficType>queuingTraffic</ns2:abnormalTrafficType>
                <ns2:queueLength>7568</ns2:queueLength>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2640808" version="1">
            <ns2:situationVersionTime>2016-05-09T00:02:24.883+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2640808-A-NLS" version="1">
                <ns2:situationRecordCreationTime>2016-05-09T00:02:29.476+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-05-09T00:02:24.883+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-05-09T00:02:29.476+02:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>18530</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>460</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>18528</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1084</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>narrowLanes</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2640808-A-RNL" version="1">
                <ns2:situationRecordCreationTime>2016-05-09T00:02:29.476+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-05-09T00:02:24.883+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-05-09T00:02:29.476+02:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>18530</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>460</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>18528</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1084</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>newRoadworksLayout</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2640802" version="1">
            <ns2:situationVersionTime>2016-05-09T00:02:24.883+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2640802-M-RCD" version="1">
                <ns2:situationRecordCreationTime>2016-05-09T00:02:27.116+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-05-09T00:02:24.883+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-05-09T00:02:27.116+02:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>21304</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>5276</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>21308</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1096</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>roadClosed</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2432220" version="1">
            <ns2:situationVersionTime>2016-03-02T10:04:17.602+01:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2432220-M-RCD" version="1">
                <ns2:situationRecordCreationTime>2016-03-02T10:04:17.603+01:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-03-02T10:04:17.602+01:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-03-02T10:04:17.603+01:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>29676</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>2020</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>29678</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>17</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>roadClosed</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2732692" version="1">
            <ns2:situationVersionTime>2016-06-01T06:02:24.882+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2732692-A-RNL" version="1">
                <ns2:situationRecordCreationTime>2016-06-01T06:02:27.008+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-06-01T06:02:24.882+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-06-01T06:02:27.008+02:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>11446</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1670</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>11404</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1862</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>newRoadworksLayout</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2471336" version="1">
            <ns2:situationVersionTime>2016-03-15T00:02:24.882+01:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2471336-M-RCD" version="1">
                <ns2:situationRecordCreationTime>2016-03-15T00:02:26.247+01:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-03-15T00:02:24.882+01:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-03-15T00:02:26.247+01:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>21300</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>31</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>21302</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>3328</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>roadClosed</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2732693" version="3">
            <ns2:situationVersionTime>2016-06-17T09:02:24.883+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2732693-A-RNL" version="3">
                <ns2:situationRecordCreationTime>2016-06-01T06:02:27.092+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-06-17T09:02:24.883+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-06-01T06:02:27.092+02:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>11446</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1645</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>11404</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1555</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>newRoadworksLayout</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2641091" version="1">
            <ns2:situationVersionTime>2016-05-09T07:02:25.094+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2641091-A-NLS" version="1">
                <ns2:situationRecordCreationTime>2016-05-09T07:02:26.888+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-05-09T07:02:25.094+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-05-09T07:02:26.888+02:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>21306</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>20</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>21312</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>2237</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>narrowLanes</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2067344" version="1">
            <ns2:situationVersionTime>2015-10-27T17:09:45.327+01:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2067344-M-RCD" version="1">
                <ns2:situationRecordCreationTime>2015-10-27T17:09:45.402+01:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2015-10-27T17:09:45.327+01:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2015-10-27T17:09:45.402+01:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>17108</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1252</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>17105</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1710</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>roadClosed</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2842473" version="1">
            <ns2:situationVersionTime>2016-06-30T00:02:24.877+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2842473-M-RCD" version="1">
                <ns2:situationRecordCreationTime>2016-06-30T00:02:29.322+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-06-30T00:02:24.877+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-06-30T00:02:29.322+02:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>19416</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>4718</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>19414</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>271</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>roadClosed</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2825772" version="1">
            <ns2:situationVersionTime>2016-06-27T06:02:24.881+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2825772-M-RCD" version="1">
                <ns2:situationRecordCreationTime>2016-06-27T06:02:28.538+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-06-27T06:02:24.881+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-06-27T06:02:28.538+02:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>27402</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>379</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>27400</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>3020</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>roadClosed</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2799136" version="1">
            <ns2:situationVersionTime>2016-06-20T08:02:24.892+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2799136-M-RCD" version="1">
                <ns2:situationRecordCreationTime>2016-06-20T08:02:26.813+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-06-20T08:02:24.892+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-06-20T08:02:26.813+02:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>21810</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1621</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>21811</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1174</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>roadClosed</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2703090" version="3">
            <ns2:situationVersionTime>2016-06-22T15:54:53.758+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2703090-A-NLS" version="3">
                <ns2:situationRecordCreationTime>2016-05-24T23:47:28.964+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-06-22T15:54:53.758+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-05-24T23:47:28.964+02:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>6224</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>603</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>6220</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>3476</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>narrowLanes</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2703090-A-RNL" version="3">
                <ns2:situationRecordCreationTime>2016-05-24T23:47:28.964+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-06-22T15:54:53.758+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-05-24T23:47:28.964+02:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>6224</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>603</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>6220</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>3476</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>newRoadworksLayout</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2857973" version="1">
            <ns2:situationVersionTime>2016-07-04T09:02:24.883+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2857973-A-NLS" version="1">
                <ns2:situationRecordCreationTime>2016-07-04T09:02:29.961+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-07-04T09:02:24.883+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-07-04T09:02:29.961+02:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>23220</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1309</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>23218</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>911</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>narrowLanes</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2844089" version="1">
            <ns2:situationVersionTime>2016-06-30T09:37:36.194+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:MaintenanceWorks" id="2844089-M-RWK" version="1">
                <ns2:situationRecordCreationTime>2016-06-30T09:37:35.211+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-06-30T09:37:36.194+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-06-30T09:37:35.211+02:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>22546</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>5213</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>30226</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>81</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:roadMaintenanceType>roadworks</ns2:roadMaintenanceType>
            </ns2:situationRecord>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2844089-A-RCD" version="1">
                <ns2:situationRecordCreationTime>2016-06-30T09:37:35.211+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-06-30T09:37:36.194+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-06-30T09:37:35.211+02:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>22546</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>5213</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>30226</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>81</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>roadClosed</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2858205" version="21">
            <ns2:situationVersionTime>2016-07-04T11:08:00.000+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:AbnormalTraffic" id="2858205-M-LS2" version="21">
                <ns2:situationRecordCreationTime>2016-07-04T10:37:25.343+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-07-04T11:08:00.000+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-07-04T10:37:25.343+02:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>11030</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>918</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>11024</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>2326</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:abnormalTrafficType>queuingTraffic</ns2:abnormalTrafficType>
                <ns2:queueLength>1826</ns2:queueLength>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2858263" version="7">
            <ns2:situationVersionTime>2016-07-04T11:07:00.000+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:AbnormalTraffic" id="2858263-M-LS2" version="7">
                <ns2:situationRecordCreationTime>2016-07-04T10:57:25.329+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-07-04T11:07:00.000+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-07-04T10:57:25.329+02:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>5944</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>5942</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>254</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:abnormalTrafficType>queuingTraffic</ns2:abnormalTrafficType>
                <ns2:queueLength>1339</ns2:queueLength>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2849641" version="1">
            <ns2:situationVersionTime>2016-07-01T06:02:24.883+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2849641-M-RCD" version="1">
                <ns2:situationRecordCreationTime>2016-07-01T06:02:28.713+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-07-01T06:02:24.883+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-07-01T06:02:28.713+02:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>12054</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1266</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>12052</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>120</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>roadClosed</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2522836" version="2">
            <ns2:situationVersionTime>2016-04-04T06:46:04.827+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2522836-A-RNL" version="2">
                <ns2:situationRecordCreationTime>2016-04-04T00:02:26.204+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-04-04T06:46:04.827+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-04-04T00:02:26.204+02:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>23228</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>321</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>23230</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1450</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>newRoadworksLayout</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2849639" version="1">
            <ns2:situationVersionTime>2016-07-01T06:02:24.883+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2849639-M-RCD" version="1">
                <ns2:situationRecordCreationTime>2016-07-01T06:02:28.561+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-07-01T06:02:24.883+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-07-01T06:02:28.561+02:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>29622</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>195</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>29621</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>roadClosed</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2467602" version="1">
            <ns2:situationVersionTime>2016-03-14T06:02:24.883+01:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2467602-A-RNL" version="1">
                <ns2:situationRecordCreationTime>2016-03-14T06:02:25.950+01:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-03-14T06:02:24.883+01:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-03-14T06:02:25.950+01:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>15006</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1145</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>15004</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>242</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>newRoadworksLayout</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2640801" version="1">
            <ns2:situationVersionTime>2016-05-09T00:02:24.883+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2640801-M-RCD" version="1">
                <ns2:situationRecordCreationTime>2016-05-09T00:02:27.015+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-05-09T00:02:24.883+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-05-09T00:02:27.015+02:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>21308</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1101</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>21304</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>5276</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>roadClosed</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2002960" version="2">
            <ns2:situationVersionTime>2016-02-16T14:54:14.510+01:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2002960-A-NLS" version="2">
                <ns2:situationRecordCreationTime>2015-10-09T18:08:34.724+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-02-16T14:54:14.510+01:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2015-10-09T18:08:34.724+02:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>22432</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>50</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>22431</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>8993</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>narrowLanes</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2002960-A-RNL" version="2">
                <ns2:situationRecordCreationTime>2015-10-09T18:08:34.724+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-02-16T14:54:14.510+01:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2015-10-09T18:08:34.724+02:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>22432</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>50</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>22431</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>8993</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>newRoadworksLayout</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2759716" version="1">
            <ns2:situationVersionTime>2016-06-08T10:50:41.555+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2759716-M-RCD" version="1">
                <ns2:situationRecordCreationTime>2016-06-08T10:50:41.555+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-06-08T10:50:41.555+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-06-08T10:50:41.555+02:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>20922</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>2263</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>30040</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>682</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>roadClosed</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2855382" version="3">
            <ns2:situationVersionTime>2016-07-02T04:30:10.923+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:MaintenanceWorks" id="2855382-M-RWK" version="3">
                <ns2:situationRecordCreationTime>2016-07-02T04:02:39.099+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-07-02T04:30:10.923+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-07-02T04:02:39.099+02:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>6514</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>26</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>6510</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>2599</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:roadMaintenanceType>roadworks</ns2:roadMaintenanceType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2073400" version="2">
            <ns2:situationVersionTime>2016-02-16T14:54:14.510+01:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2073400-M-RCD" version="2">
                <ns2:situationRecordCreationTime>2015-10-29T00:02:30.334+01:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-02-16T14:54:14.510+01:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2015-10-29T00:02:30.334+01:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>27900</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>582</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>20286</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>702</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>roadClosed</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2794665" version="2">
            <ns2:situationVersionTime>2016-06-20T15:09:18.336+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:MaintenanceWorks" id="2794665-M-RRW" version="2">
                <ns2:situationRecordCreationTime>2016-06-17T14:52:16.193+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-06-20T15:09:18.336+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-06-17T14:52:16.193+02:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>18530</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>107</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>18528</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1441</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:roadMaintenanceType>roadsideWork</ns2:roadMaintenanceType>
            </ns2:situationRecord>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2794665-A-RNL" version="2">
                <ns2:situationRecordCreationTime>2016-06-17T14:52:16.193+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-06-20T15:09:18.336+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-06-17T14:52:16.193+02:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>18530</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>107</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>18528</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1441</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>newRoadworksLayout</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2858243" version="14">
            <ns2:situationVersionTime>2016-07-04T11:08:03.000+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:AbnormalTraffic" id="2858243-M-LS2" version="14">
                <ns2:situationRecordCreationTime>2016-07-04T10:50:04.000+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-07-04T11:08:03.000+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-07-04T10:50:04.000+02:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>5206</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>470</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>5209</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>595</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:abnormalTrafficType>queuingTraffic</ns2:abnormalTrafficType>
                <ns2:queueLength>5620</ns2:queueLength>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2766544" version="2">
            <ns2:situationVersionTime>2016-06-28T17:34:00.085+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2766544-A-NLS" version="2">
                <ns2:situationRecordCreationTime>2016-06-10T06:02:25.740+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-06-28T17:34:00.085+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-06-10T06:02:25.740+02:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>47566</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1058</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>47562</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>31</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>narrowLanes</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2766544-A-RNL" version="2">
                <ns2:situationRecordCreationTime>2016-06-10T06:02:25.740+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-06-28T17:34:00.085+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-06-10T06:02:25.740+02:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>47566</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1058</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>47562</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>31</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>newRoadworksLayout</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2687845" version="1">
            <ns2:situationVersionTime>2016-05-20T12:28:30.181+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2687845-M-RCD" version="1">
                <ns2:situationRecordCreationTime>2016-05-20T12:28:30.181+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-05-20T12:28:30.181+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-05-20T12:28:30.181+02:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>23620</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>2214</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>23622</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>3060</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>roadClosed</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2858280" version="1">
            <ns2:situationVersionTime>2016-07-04T11:04:36.588+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:VehicleObstruction" id="2858280-M-BKD" version="1">
                <ns2:situationRecordCreationTime>2016-07-04T11:04:36.010+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-07-04T11:04:36.588+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-07-04T11:04:36.010+02:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Point">
                    <ns2:alertCPoint xsi:type="ns2:AlertCMethod4Point">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>11119</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>409</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                    </ns2:alertCPoint>
                </ns2:groupOfLocations>
                <ns2:vehicleObstructionType>brokenDownVehicle</ns2:vehicleObstructionType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2073399" version="2">
            <ns2:situationVersionTime>2016-02-16T14:54:14.510+01:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2073399-M-RCD" version="2">
                <ns2:situationRecordCreationTime>2015-10-29T00:02:30.235+01:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-02-16T14:54:14.510+01:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2015-10-29T00:02:30.235+01:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>20286</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>704</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>27900</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>582</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>roadClosed</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
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
        <ns2:situation id="EVT2858258" version="2">
            <ns2:situationVersionTime>2016-07-04T10:57:03.000+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:AbnormalTraffic" id="2858258-M-LS2" version="2">
                <ns2:situationRecordCreationTime>2016-07-04T10:56:02.000+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-07-04T10:57:03.000+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-07-04T10:56:02.000+02:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>11070</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>0</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>5403</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>0</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:abnormalTrafficType>queuingTraffic</ns2:abnormalTrafficType>
                <ns2:queueLength>2868</ns2:queueLength>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2858211" version="22">
            <ns2:situationVersionTime>2016-07-04T11:07:00.000+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:AbnormalTraffic" id="2858211-M-LS2" version="22">
                <ns2:situationRecordCreationTime>2016-07-04T10:39:25.331+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-07-04T11:07:00.000+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-07-04T10:39:25.331+02:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>11048</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>242</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>11042</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1263</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:abnormalTrafficType>queuingTraffic</ns2:abnormalTrafficType>
                <ns2:queueLength>1537</ns2:queueLength>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2858199" version="23">
            <ns2:situationVersionTime>2016-07-04T11:00:00.000+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:AbnormalTraffic" id="2858199-M-LS2" version="23">
                <ns2:situationRecordCreationTime>2016-07-04T10:35:25.305+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-07-04T11:00:00.000+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-07-04T10:35:25.305+02:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>11118</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>867</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>11122</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>284</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:abnormalTrafficType>queuingTraffic</ns2:abnormalTrafficType>
                <ns2:queueLength>1852</ns2:queueLength>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2858225" version="1">
            <ns2:situationVersionTime>2016-07-04T10:46:07.550+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:GeneralObstruction" id="2858225-M-OHX" version="1">
                <ns2:situationRecordCreationTime>2016-07-04T10:46:06.895+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-07-04T10:46:07.550+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-07-04T10:46:06.895+02:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>11206</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>89</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>11209</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1649</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:obstructionType>obstructionOnTheRoad</ns2:obstructionType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2849642" version="1">
            <ns2:situationVersionTime>2016-07-01T06:02:24.883+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2849642-M-RCD" version="1">
                <ns2:situationRecordCreationTime>2016-07-01T06:02:28.780+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-07-01T06:02:24.883+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-07-01T06:02:28.780+02:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>12052</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>120</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>12054</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1266</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>roadClosed</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2522874" version="2">
            <ns2:situationVersionTime>2016-05-25T18:11:43.128+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2522874-A-NLS" version="2">
                <ns2:situationRecordCreationTime>2016-04-04T06:02:26.740+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-05-25T18:11:43.128+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-04-04T06:02:26.740+02:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>20016</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>28</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>20015</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1963</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>narrowLanes</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2002895" version="3">
            <ns2:situationVersionTime>2016-02-19T09:57:52.221+01:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2002895-M-RCD" version="3">
                <ns2:situationRecordCreationTime>2015-10-09T18:08:28.506+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-02-19T09:57:52.221+01:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2015-10-09T18:08:28.506+02:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>18438</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1229</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>18440</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>8</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>roadClosed</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2490951" version="1">
            <ns2:situationVersionTime>2016-03-21T15:03:53.834+01:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2490951-A-NLS" version="1">
                <ns2:situationRecordCreationTime>2016-03-21T15:03:53.883+01:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-03-21T15:03:53.834+01:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-03-21T15:03:53.883+01:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>18901</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>425</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>18902</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>6014</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>narrowLanes</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2703353" version="1">
            <ns2:situationVersionTime>2016-05-25T06:43:57.788+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2703353-M-RCD" version="1">
                <ns2:situationRecordCreationTime>2016-05-25T06:43:57.857+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-05-25T06:43:57.788+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-05-25T06:43:57.857+02:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>20412</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>5669</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>20414</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1150</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>roadClosed</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2382226" version="1">
            <ns2:situationVersionTime>2016-02-16T14:58:25.150+01:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:MaintenanceWorks" id="2382226-M-RRW" version="1">
                <ns2:situationRecordCreationTime>2016-02-16T14:58:25.153+01:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-02-16T14:58:25.150+01:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-02-16T14:58:25.153+01:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>17432</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>2</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>17430</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>5</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:roadMaintenanceType>roadsideWork</ns2:roadMaintenanceType>
            </ns2:situationRecord>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2382226-A-NLS" version="1">
                <ns2:situationRecordCreationTime>2016-02-16T14:58:25.153+01:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-02-16T14:58:25.150+01:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-02-16T14:58:25.153+01:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>17432</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>2</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>17430</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>5</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>narrowLanes</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2420920" version="4">
            <ns2:situationVersionTime>2016-06-17T14:52:16.119+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2420920-M-RNL" version="4">
                <ns2:situationRecordCreationTime>2016-02-29T00:02:26.577+01:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-06-17T14:52:16.119+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-02-29T00:02:26.577+01:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>18528</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1783</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>18534</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1378</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>newRoadworksLayout</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2641090" version="1">
            <ns2:situationVersionTime>2016-05-09T07:02:25.094+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2641090-A-NLS" version="1">
                <ns2:situationRecordCreationTime>2016-05-09T07:02:26.780+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-05-09T07:02:25.094+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-05-09T07:02:26.780+02:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>21312</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>2237</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>21306</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>20</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>narrowLanes</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2002955" version="3">
            <ns2:situationVersionTime>2016-03-01T16:16:36.955+01:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2002955-A-NLS" version="3">
                <ns2:situationRecordCreationTime>2015-10-09T18:08:31.821+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-03-01T16:16:36.955+01:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2015-10-09T18:08:31.821+02:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>22432</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1220</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>22431</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>7900</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>narrowLanes</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2002955-A-RNL" version="3">
                <ns2:situationRecordCreationTime>2015-10-09T18:08:31.821+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-03-01T16:16:36.955+01:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2015-10-09T18:08:31.821+02:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>22432</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1220</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>22431</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>7900</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>newRoadworksLayout</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2522873" version="2">
            <ns2:situationVersionTime>2016-05-25T18:11:43.128+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2522873-A-NLS" version="2">
                <ns2:situationRecordCreationTime>2016-04-04T06:02:26.655+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-05-25T18:11:43.128+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-04-04T06:02:26.655+02:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>20015</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1963</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>20016</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>28</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>narrowLanes</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2002964" version="2">
            <ns2:situationVersionTime>2016-02-16T14:54:14.510+01:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2002964-A-NLS" version="2">
                <ns2:situationRecordCreationTime>2015-10-09T18:08:35.010+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-02-16T14:54:14.510+01:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2015-10-09T18:08:35.010+02:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>22431</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>9091</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>22432</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>34</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>narrowLanes</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2002964-A-RNL" version="2">
                <ns2:situationRecordCreationTime>2015-10-09T18:08:35.010+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-02-16T14:54:14.510+01:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2015-10-09T18:08:35.010+02:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>22431</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>9091</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>22432</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>34</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>newRoadworksLayout</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2467603" version="1">
            <ns2:situationVersionTime>2016-03-14T06:02:24.883+01:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2467603-M-RNL" version="1">
                <ns2:situationRecordCreationTime>2016-03-14T06:02:26.046+01:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-03-14T06:02:24.883+01:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-03-14T06:02:26.046+01:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>15004</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>242</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>15006</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1144</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>newRoadworksLayout</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2538391" version="2">
            <ns2:situationVersionTime>2016-04-09T15:02:24.882+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2538391-A-NLS" version="2">
                <ns2:situationRecordCreationTime>2016-04-09T11:02:27.392+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-04-09T15:02:24.882+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-04-09T11:02:27.392+02:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>11015</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1654</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>50014</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1489</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>narrowLanes</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2538391-A-RNL" version="2">
                <ns2:situationRecordCreationTime>2016-04-09T11:02:27.392+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-04-09T15:02:24.882+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-04-09T11:02:27.392+02:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>11015</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1654</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>50014</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1489</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>newRoadworksLayout</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2732950" version="1">
            <ns2:situationVersionTime>2016-06-01T07:02:24.883+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2732950-A-NLS" version="1">
                <ns2:situationRecordCreationTime>2016-06-01T07:02:26.968+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-06-01T07:02:24.883+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-06-01T07:02:26.968+02:00</ns2:overallStartTime>
                    </ns2:validityTimeSpecification>
                </ns2:validity>
                <ns2:groupOfLocations xsi:type="ns2:Linear">
                    <ns2:alertCLinear xsi:type="ns2:AlertCMethod4Linear">
                        <ns2:alertCLocationCountryCode>BE</ns2:alertCLocationCountryCode>
                        <ns2:alertCLocationTableNumber>601</ns2:alertCLocationTableNumber>
                        <ns2:alertCLocationTableVersion>2.9</ns2:alertCLocationTableVersion>
                        <ns2:alertCDirection>
                            <ns2:alertCDirectionCoded>negative</ns2:alertCDirectionCoded>
                        </ns2:alertCDirection>
                        <ns2:alertCMethod4PrimaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>29714</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>2338</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>29713</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>96</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>narrowLanes</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2849640" version="1">
            <ns2:situationVersionTime>2016-07-01T06:02:24.883+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2849640-M-RCD" version="1">
                <ns2:situationRecordCreationTime>2016-07-01T06:02:28.645+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-07-01T06:02:24.883+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-07-01T06:02:28.645+02:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>29621</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>4</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>29622</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>192</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>roadClosed</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2640809" version="1">
            <ns2:situationVersionTime>2016-05-09T00:02:24.883+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2640809-A-NLS" version="1">
                <ns2:situationRecordCreationTime>2016-05-09T00:02:29.547+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-05-09T00:02:24.883+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-05-09T00:02:29.547+02:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>18528</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1084</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>18530</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>460</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>narrowLanes</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2640809-A-RNL" version="1">
                <ns2:situationRecordCreationTime>2016-05-09T00:02:29.547+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-05-09T00:02:24.883+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-05-09T00:02:29.547+02:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>18528</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1084</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>18530</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>460</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>newRoadworksLayout</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2858110" version="25">
            <ns2:situationVersionTime>2016-07-04T11:01:05.000+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:AbnormalTraffic" id="2858110-M-LS2" version="25">
                <ns2:situationRecordCreationTime>2016-07-04T05:54:03.000+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-07-04T11:01:05.000+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-07-04T05:54:03.000+02:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>5900</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>68</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>5904</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>80</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:abnormalTrafficType>queuingTraffic</ns2:abnormalTrafficType>
                <ns2:queueLength>4963</ns2:queueLength>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2538265" version="2">
            <ns2:situationVersionTime>2016-04-09T11:02:24.889+02:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2538265-A-NLS" version="2">
                <ns2:situationRecordCreationTime>2016-04-09T06:02:26.586+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-04-09T11:02:24.889+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-04-09T06:02:26.586+02:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>50014</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1493</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>11015</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1651</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>narrowLanes</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2538265-A-RNL" version="2">
                <ns2:situationRecordCreationTime>2016-04-09T06:02:26.586+02:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2016-04-09T11:02:24.889+02:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2016-04-09T06:02:26.586+02:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>50014</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1493</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>11015</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1651</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>newRoadworksLayout</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
        <ns2:situation id="EVT2067345" version="1">
            <ns2:situationVersionTime>2015-10-27T17:09:45.327+01:00</ns2:situationVersionTime>
            <ns2:headerInformation>
                <ns2:confidentiality>noRestriction</ns2:confidentiality>
                <ns2:informationStatus>real</ns2:informationStatus>
            </ns2:headerInformation>
            <ns2:situationRecord xsi:type="ns2:RoadOrCarriagewayOrLaneManagement" id="2067345-M-RCD" version="1">
                <ns2:situationRecordCreationTime>2015-10-27T17:09:45.525+01:00</ns2:situationRecordCreationTime>
                <ns2:situationRecordVersionTime>2015-10-27T17:09:45.327+01:00</ns2:situationRecordVersionTime>
                <ns2:probabilityOfOccurrence>certain</ns2:probabilityOfOccurrence>
                <ns2:validity>
                    <ns2:validityStatus>active</ns2:validityStatus>
                    <ns2:validityTimeSpecification>
                        <ns2:overallStartTime>2015-10-27T17:09:45.525+01:00</ns2:overallStartTime>
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
                                <ns2:specificLocation>17105</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1710</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4PrimaryPointLocation>
                        <ns2:alertCMethod4SecondaryPointLocation>
                            <ns2:alertCLocation>
                                <ns2:specificLocation>17108</ns2:specificLocation>
                            </ns2:alertCLocation>
                            <ns2:offsetDistance>
                                <ns2:offsetDistance>1252</ns2:offsetDistance>
                            </ns2:offsetDistance>
                        </ns2:alertCMethod4SecondaryPointLocation>
                    </ns2:alertCLinear>
                </ns2:groupOfLocations>
                <ns2:complianceOption>advisory</ns2:complianceOption>
                <ns2:roadOrCarriagewayOrLaneManagementType>roadClosed</ns2:roadOrCarriagewayOrLaneManagementType>
            </ns2:situationRecord>
        </ns2:situation>
    </ns2:payloadPublication>
</ns2:d2LogicalModel>
`;

const url = 'http://verkeerscentrum.be/uitwisseling/datex2full';
const base = 'https://osoc16.github.io/mobylink/verkeerscentrum/terms/';
const outputFile = "_data/verkeerscentrum.json";

const context = {
  // todo
};

let graph = [];

got(url).then(response => {
  parser.parseString(response, function (err, result) {

    for (let situation of result['ns2:d2LogicalModel']['ns2:payloadPublication'][0]['ns2:situation']) {
      // for (let record of situation['ns2:situationRecord']) {
      //   types.push({
      //     situation: situation,
      //     record: record
      //   })
      // }
      graph.push(situation);
      // types.push({
      //   id: situation['ns2:situationRecord'],
      //   record: situation['ns2:situationRecord']
      // });
    }
  };

  // for (let situation of data) {

  //   // make the id into a url
  //   space['@id'] = `${base}#${space.id}`;
  //   delete space.id;

  //   // make the parkingstatus conform
  //   if (space.parkingStatus.open) {
  //     space.parkingStatus.openingStatus = 'open';
  //   } else {
  //     space.parkingStatus.openingStatus = 'closed';
  //   }
  //   delete space.parkingStatus.open;

  //   // delete what isn't parseable
  //   delete space.suggestedFreeThreshold;
  //   delete space.suggestedFullThreshold;
  //   delete space.capacityRounding;

  //   // fix the time
  //   space.parkingStatus.lastModifiedDate = new Date(space.parkingStatus.lastModifiedDate).toISOString()

  //   // set the type
  //   // space['@type'] = '';

  //   graph.push(space);
  // };



  jsonld = {
    '@context': context,
    '@graph': graph
  };

  fs.writeFile(outputFile, JSON.stringify(jsonld), function(err) {
    if (err) {
      return console.log(err);
    }

    console.log("The data was saved!");
  });
});

parser = new xml2js.Parser({stripPrefix:true});

var graph = [];

parser.parseString(xml, function (err, result) {
  for (let situation of result['ns2:d2LogicalModel']['ns2:payloadPublication'][0]['ns2:situation']) {
    // for (let record of situation['ns2:situationRecord']) {
    //   types.push({
    //     situation: situation,
    //     record: record
    //   })
    // }
    graph.push(situation);
    // types.push({
    //   id: situation['ns2:situationRecord'],
    //   record: situation['ns2:situationRecord']
    // });
  }
    fs.writeFile(outputFile, JSON.stringify(graph), function(err) {
      if(err) {
          return console.log(err);
      }

      console.log("The file was saved!");
    });
});
