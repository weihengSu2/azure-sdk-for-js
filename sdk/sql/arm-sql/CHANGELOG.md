# Release History

## 9.1.1 (Unreleased)

### Features Added

### Breaking Changes

### Bugs Fixed

### Other Changes

## 9.1.0 (2022-12-14)
    
**Features**

  - Added Interface Advisor
  - Added Interface BackupShortTermRetentionPolicy
  - Added Interface Database
  - Added Interface DatabaseAutomaticTuning
  - Added Interface DatabaseBlobAuditingPolicy
  - Added Interface DatabaseColumn
  - Added Interface DatabaseExtensions
  - Added Interface DatabaseOperation
  - Added Interface DatabaseSchema
  - Added Interface DatabaseSecurityAlertPolicy
  - Added Interface DatabaseTable
  - Added Interface DatabaseUsage
  - Added Interface DatabaseVulnerabilityAssessment
  - Added Interface DatabaseVulnerabilityAssessmentRuleBaseline
  - Added Interface DatabaseVulnerabilityAssessmentScansExport
  - Added Interface DataMaskingPolicy
  - Added Interface DataMaskingRule
  - Added Interface DataWarehouseUserActivities
  - Added Interface DeletedServer
  - Added Interface ElasticPool
  - Added Interface ElasticPoolActivity
  - Added Interface ElasticPoolDatabaseActivity
  - Added Interface ElasticPoolOperation
  - Added Interface EncryptionProtector
  - Added Interface ExtendedDatabaseBlobAuditingPolicy
  - Added Interface ExtendedServerBlobAuditingPolicy
  - Added Interface FailoverGroup
  - Added Interface FirewallRule
  - Added Interface GeoBackupPolicy
  - Added Interface ImportExportExtensionsOperationResult
  - Added Interface ImportExportOperationResult
  - Added Interface InstanceFailoverGroup
  - Added Interface InstancePool
  - Added Interface Job
  - Added Interface JobAgent
  - Added Interface JobCredential
  - Added Interface JobExecution
  - Added Interface JobStep
  - Added Interface JobTargetGroup
  - Added Interface JobVersion
  - Added Interface LedgerDigestUploads
  - Added Interface LogicalDatabaseTransparentDataEncryption
  - Added Interface LongTermRetentionBackup
  - Added Interface LongTermRetentionBackupOperationResult
  - Added Interface LongTermRetentionPolicy
  - Added Interface MaintenanceWindowOptions
  - Added Interface MaintenanceWindows
  - Added Interface ManagedBackupShortTermRetentionPolicy
  - Added Interface ManagedDatabase
  - Added Interface ManagedDatabaseRestoreDetailsResult
  - Added Interface ManagedDatabaseSecurityAlertPolicy
  - Added Interface ManagedInstance
  - Added Interface ManagedInstanceAdministrator
  - Added Interface ManagedInstanceAzureADOnlyAuthentication
  - Added Interface ManagedInstanceEncryptionProtector
  - Added Interface ManagedInstanceKey
  - Added Interface ManagedInstanceLongTermRetentionBackup
  - Added Interface ManagedInstanceLongTermRetentionPolicy
  - Added Interface ManagedInstanceOperation
  - Added Interface ManagedInstancePrivateEndpointConnection
  - Added Interface ManagedInstancePrivateLink
  - Added Interface ManagedInstanceQuery
  - Added Interface ManagedInstanceVulnerabilityAssessment
  - Added Interface ManagedServerSecurityAlertPolicy
  - Added Interface ManagedTransparentDataEncryption
  - Added Interface OperationsHealth
  - Added Interface OutboundFirewallRule
  - Added Interface PrivateEndpointConnection
  - Added Interface PrivateLinkResource
  - Added Interface ProxyResource
  - Added Interface ProxyResourceWithWritableName
  - Added Interface QueryStatistics
  - Added Interface RecommendedAction
  - Added Interface RecommendedSensitivityLabelUpdate
  - Added Interface RecoverableDatabase
  - Added Interface RecoverableManagedDatabase
  - Added Interface ReplicationLink
  - Added Interface RestorableDroppedDatabase
  - Added Interface RestorableDroppedManagedDatabase
  - Added Interface RestorePoint
  - Added Interface SecurityEvent
  - Added Interface SensitivityLabel
  - Added Interface SensitivityLabelUpdate
  - Added Interface Server
  - Added Interface ServerAutomaticTuning
  - Added Interface ServerAzureADAdministrator
  - Added Interface ServerAzureADOnlyAuthentication
  - Added Interface ServerBlobAuditingPolicy
  - Added Interface ServerCommunicationLink
  - Added Interface ServerConnectionPolicy
  - Added Interface ServerDevOpsAuditingSettings
  - Added Interface ServerDnsAlias
  - Added Interface ServerKey
  - Added Interface ServerOperation
  - Added Interface ServerSecurityAlertPolicy
  - Added Interface ServerTrustGroup
  - Added Interface ServerVulnerabilityAssessment
  - Added Interface ServiceObjective
  - Added Interface SqlAgentConfiguration
  - Added Interface SubscriptionUsage
  - Added Interface SyncAgent
  - Added Interface SyncAgentLinkedDatabase
  - Added Interface SyncGroup
  - Added Interface SyncMember
  - Added Interface TdeCertificate
  - Added Interface TimeZone
  - Added Interface TrackedResource
  - Added Interface UpdateManagedInstanceDnsServersOperation
  - Added Interface VirtualCluster
  - Added Interface VirtualNetworkRule
  - Added Interface VulnerabilityAssessmentScanRecord
  - Added Interface WorkloadClassifier
  - Added Interface WorkloadGroup
  - Added function getContinuationToken
  - Interface DatabaseColumnsListByDatabaseNextOptionalParams no longer has parameter column
  - Interface DatabaseColumnsListByDatabaseNextOptionalParams no longer has parameter orderBy
  - Interface DatabaseColumnsListByDatabaseNextOptionalParams no longer has parameter schema
  - Interface DatabaseColumnsListByDatabaseNextOptionalParams no longer has parameter skiptoken
  - Interface DatabaseColumnsListByDatabaseNextOptionalParams no longer has parameter table
  - Interface DatabaseColumnsListByTableNextOptionalParams no longer has parameter filter
  - Interface DatabaseSchemasListByDatabaseNextOptionalParams no longer has parameter filter
  - Interface DatabasesListByServerNextOptionalParams no longer has parameter skipToken
  - Interface DatabaseTablesListBySchemaNextOptionalParams no longer has parameter filter
  - Interface ElasticPoolsListByServerNextOptionalParams no longer has parameter skip
  - Interface JobExecutionsListByAgentNextOptionalParams no longer has parameter createTimeMax
  - Interface JobExecutionsListByAgentNextOptionalParams no longer has parameter createTimeMin
  - Interface JobExecutionsListByAgentNextOptionalParams no longer has parameter endTimeMax
  - Interface JobExecutionsListByAgentNextOptionalParams no longer has parameter endTimeMin
  - Interface JobExecutionsListByAgentNextOptionalParams no longer has parameter isActive
  - Interface JobExecutionsListByAgentNextOptionalParams no longer has parameter skip
  - Interface JobExecutionsListByAgentNextOptionalParams no longer has parameter top
  - Interface JobExecutionsListByJobNextOptionalParams no longer has parameter createTimeMax
  - Interface JobExecutionsListByJobNextOptionalParams no longer has parameter createTimeMin
  - Interface JobExecutionsListByJobNextOptionalParams no longer has parameter endTimeMax
  - Interface JobExecutionsListByJobNextOptionalParams no longer has parameter endTimeMin
  - Interface JobExecutionsListByJobNextOptionalParams no longer has parameter isActive
  - Interface JobExecutionsListByJobNextOptionalParams no longer has parameter skip
  - Interface JobExecutionsListByJobNextOptionalParams no longer has parameter top
  - Interface JobStepExecutionsListByJobExecutionNextOptionalParams no longer has parameter createTimeMax
  - Interface JobStepExecutionsListByJobExecutionNextOptionalParams no longer has parameter createTimeMin
  - Interface JobStepExecutionsListByJobExecutionNextOptionalParams no longer has parameter endTimeMax
  - Interface JobStepExecutionsListByJobExecutionNextOptionalParams no longer has parameter endTimeMin
  - Interface JobStepExecutionsListByJobExecutionNextOptionalParams no longer has parameter isActive
  - Interface JobStepExecutionsListByJobExecutionNextOptionalParams no longer has parameter skip
  - Interface JobStepExecutionsListByJobExecutionNextOptionalParams no longer has parameter top
  - Interface JobTargetExecutionsListByJobExecutionNextOptionalParams no longer has parameter createTimeMax
  - Interface JobTargetExecutionsListByJobExecutionNextOptionalParams no longer has parameter createTimeMin
  - Interface JobTargetExecutionsListByJobExecutionNextOptionalParams no longer has parameter endTimeMax
  - Interface JobTargetExecutionsListByJobExecutionNextOptionalParams no longer has parameter endTimeMin
  - Interface JobTargetExecutionsListByJobExecutionNextOptionalParams no longer has parameter isActive
  - Interface JobTargetExecutionsListByJobExecutionNextOptionalParams no longer has parameter skip
  - Interface JobTargetExecutionsListByJobExecutionNextOptionalParams no longer has parameter top
  - Interface JobTargetExecutionsListByStepNextOptionalParams no longer has parameter createTimeMax
  - Interface JobTargetExecutionsListByStepNextOptionalParams no longer has parameter createTimeMin
  - Interface JobTargetExecutionsListByStepNextOptionalParams no longer has parameter endTimeMax
  - Interface JobTargetExecutionsListByStepNextOptionalParams no longer has parameter endTimeMin
  - Interface JobTargetExecutionsListByStepNextOptionalParams no longer has parameter isActive
  - Interface JobTargetExecutionsListByStepNextOptionalParams no longer has parameter skip
  - Interface JobTargetExecutionsListByStepNextOptionalParams no longer has parameter top
  - Interface LongTermRetentionBackupsListByDatabaseNextOptionalParams no longer has parameter databaseState
  - Interface LongTermRetentionBackupsListByDatabaseNextOptionalParams no longer has parameter onlyLatestPerDatabase
  - Interface LongTermRetentionBackupsListByLocationNextOptionalParams no longer has parameter databaseState
  - Interface LongTermRetentionBackupsListByLocationNextOptionalParams no longer has parameter onlyLatestPerDatabase
  - Interface LongTermRetentionBackupsListByResourceGroupDatabaseNextOptionalParams no longer has parameter databaseState
  - Interface LongTermRetentionBackupsListByResourceGroupDatabaseNextOptionalParams no longer has parameter onlyLatestPerDatabase
  - Interface LongTermRetentionBackupsListByResourceGroupLocationNextOptionalParams no longer has parameter databaseState
  - Interface LongTermRetentionBackupsListByResourceGroupLocationNextOptionalParams no longer has parameter onlyLatestPerDatabase
  - Interface LongTermRetentionBackupsListByResourceGroupServerNextOptionalParams no longer has parameter databaseState
  - Interface LongTermRetentionBackupsListByResourceGroupServerNextOptionalParams no longer has parameter onlyLatestPerDatabase
  - Interface LongTermRetentionBackupsListByServerNextOptionalParams no longer has parameter databaseState
  - Interface LongTermRetentionBackupsListByServerNextOptionalParams no longer has parameter onlyLatestPerDatabase
  - Interface LongTermRetentionManagedInstanceBackupsListByDatabaseNextOptionalParams no longer has parameter databaseState
  - Interface LongTermRetentionManagedInstanceBackupsListByDatabaseNextOptionalParams no longer has parameter onlyLatestPerDatabase
  - Interface LongTermRetentionManagedInstanceBackupsListByInstanceNextOptionalParams no longer has parameter databaseState
  - Interface LongTermRetentionManagedInstanceBackupsListByInstanceNextOptionalParams no longer has parameter onlyLatestPerDatabase
  - Interface LongTermRetentionManagedInstanceBackupsListByLocationNextOptionalParams no longer has parameter databaseState
  - Interface LongTermRetentionManagedInstanceBackupsListByLocationNextOptionalParams no longer has parameter onlyLatestPerDatabase
  - Interface LongTermRetentionManagedInstanceBackupsListByResourceGroupDatabaseNextOptionalParams no longer has parameter databaseState
  - Interface LongTermRetentionManagedInstanceBackupsListByResourceGroupDatabaseNextOptionalParams no longer has parameter onlyLatestPerDatabase
  - Interface LongTermRetentionManagedInstanceBackupsListByResourceGroupInstanceNextOptionalParams no longer has parameter databaseState
  - Interface LongTermRetentionManagedInstanceBackupsListByResourceGroupInstanceNextOptionalParams no longer has parameter onlyLatestPerDatabase
  - Interface LongTermRetentionManagedInstanceBackupsListByResourceGroupLocationNextOptionalParams no longer has parameter databaseState
  - Interface LongTermRetentionManagedInstanceBackupsListByResourceGroupLocationNextOptionalParams no longer has parameter onlyLatestPerDatabase
  - Interface ManagedDatabaseColumnsListByDatabaseNextOptionalParams no longer has parameter column
  - Interface ManagedDatabaseColumnsListByDatabaseNextOptionalParams no longer has parameter orderBy
  - Interface ManagedDatabaseColumnsListByDatabaseNextOptionalParams no longer has parameter schema
  - Interface ManagedDatabaseColumnsListByDatabaseNextOptionalParams no longer has parameter skiptoken
  - Interface ManagedDatabaseColumnsListByDatabaseNextOptionalParams no longer has parameter table
  - Interface ManagedDatabaseColumnsListByTableNextOptionalParams no longer has parameter filter
  - Interface ManagedDatabaseQueriesListByQueryNextOptionalParams no longer has parameter endTime
  - Interface ManagedDatabaseQueriesListByQueryNextOptionalParams no longer has parameter interval
  - Interface ManagedDatabaseQueriesListByQueryNextOptionalParams no longer has parameter startTime
  - Interface ManagedDatabaseSchemasListByDatabaseNextOptionalParams no longer has parameter filter
  - Interface ManagedDatabaseSecurityEventsListByDatabaseNextOptionalParams no longer has parameter filter
  - Interface ManagedDatabaseSecurityEventsListByDatabaseNextOptionalParams no longer has parameter skip
  - Interface ManagedDatabaseSecurityEventsListByDatabaseNextOptionalParams no longer has parameter skiptoken
  - Interface ManagedDatabaseSecurityEventsListByDatabaseNextOptionalParams no longer has parameter top
  - Interface ManagedDatabaseSensitivityLabelsListCurrentByDatabaseNextOptionalParams no longer has parameter count
  - Interface ManagedDatabaseSensitivityLabelsListCurrentByDatabaseNextOptionalParams no longer has parameter filter
  - Interface ManagedDatabaseSensitivityLabelsListCurrentByDatabaseNextOptionalParams no longer has parameter skipToken
  - Interface ManagedDatabaseSensitivityLabelsListRecommendedByDatabaseNextOptionalParams no longer has parameter filter
  - Interface ManagedDatabaseSensitivityLabelsListRecommendedByDatabaseNextOptionalParams no longer has parameter includeDisabledRecommendations
  - Interface ManagedDatabaseSensitivityLabelsListRecommendedByDatabaseNextOptionalParams no longer has parameter skipToken
  - Interface ManagedDatabaseTablesListBySchemaNextOptionalParams no longer has parameter filter
  - Interface ManagedInstanceKeysListByInstanceNextOptionalParams no longer has parameter filter
  - Interface ManagedInstancesListByInstancePoolNextOptionalParams no longer has parameter expand
  - Interface ManagedInstancesListByManagedInstanceNextOptionalParams no longer has parameter aggregationFunction
  - Interface ManagedInstancesListByManagedInstanceNextOptionalParams no longer has parameter databases
  - Interface ManagedInstancesListByManagedInstanceNextOptionalParams no longer has parameter endTime
  - Interface ManagedInstancesListByManagedInstanceNextOptionalParams no longer has parameter interval
  - Interface ManagedInstancesListByManagedInstanceNextOptionalParams no longer has parameter numberOfQueries
  - Interface ManagedInstancesListByManagedInstanceNextOptionalParams no longer has parameter observationMetric
  - Interface ManagedInstancesListByManagedInstanceNextOptionalParams no longer has parameter startTime
  - Interface ManagedInstancesListByResourceGroupNextOptionalParams no longer has parameter expand
  - Interface ManagedInstancesListNextOptionalParams no longer has parameter expand
  - Interface SensitivityLabelsListCurrentByDatabaseNextOptionalParams no longer has parameter count
  - Interface SensitivityLabelsListCurrentByDatabaseNextOptionalParams no longer has parameter filter
  - Interface SensitivityLabelsListCurrentByDatabaseNextOptionalParams no longer has parameter skipToken
  - Interface SensitivityLabelsListRecommendedByDatabaseNextOptionalParams no longer has parameter filter
  - Interface SensitivityLabelsListRecommendedByDatabaseNextOptionalParams no longer has parameter includeDisabledRecommendations
  - Interface SensitivityLabelsListRecommendedByDatabaseNextOptionalParams no longer has parameter skipToken
  - Interface ServersListByResourceGroupNextOptionalParams no longer has parameter expand
  - Interface ServersListNextOptionalParams no longer has parameter expand
  - Interface SyncGroupsListLogsNextOptionalParams no longer has parameter continuationToken
  - Interface UsagesListByInstancePoolNextOptionalParams no longer has parameter expandChildren
    
## 9.0.1 (2022-05-01)

**Features**

  - Bug fix

## 9.0.0 (2021-12-07)

The package of @azure/arm-sql is using our next generation design principles since version 9.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
