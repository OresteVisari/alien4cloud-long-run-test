$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/cloudify3/openstack/block_storage.feature");
formatter.feature({
  "id": "block-storage",
  "description": "",
  "name": "Block storage",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 5928849307,
  "status": "passed"
});
formatter.before({
  "duration": 81134074,
  "status": "passed"
});
formatter.scenario({
  "id": "block-storage;block-storage",
  "description": "",
  "name": "Block storage",
  "keyword": "Scenario",
  "line": 5,
  "type": "scenario",
  "comments": [
    {
      "value": "# Tested features with this scenario:",
      "line": 2
    },
    {
      "value": "#   - Block storage",
      "line": 3
    },
    {
      "value": "#   - Reuse of an existing block storage",
      "line": 4
    }
  ]
});
formatter.step({
  "name": "I am authenticated with \"ADMIN\" role",
  "keyword": "Given ",
  "line": 6
});
formatter.step({
  "name": "I checkout the git archive from url \"https://github.com/alien4cloud/tosca-normative-types.git\" branch \"master\"",
  "keyword": "And ",
  "line": 9,
  "comments": [
    {
      "value": "# Archives",
      "line": 8
    }
  ]
});
formatter.step({
  "name": "I upload the git archive \"tosca-normative-types\"",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "I checkout the git archive from url \"https://github.com/alien4cloud/alien4cloud-extended-types.git\" branch \"master\"",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "I upload the git archive \"alien4cloud-extended-types/alien-base-types-1.0-SNAPSHOT\"",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "I upload the git archive \"alien4cloud-extended-types/alien-extended-storage-types-1.0-SNAPSHOT\"",
  "keyword": "And ",
  "line": 13
});
formatter.step({
  "name": "I upload the local archive \"topologies/block_storage.yaml\"",
  "keyword": "And ",
  "line": 14
});
formatter.step({
  "name": "I upload a plugin from \"../alien4cloud-cloudify3-provider\"",
  "keyword": "And ",
  "line": 18,
  "comments": [
    {
      "value": "# Cloudify 3",
      "line": 16
    },
    {
      "value": "# And I upload a plugin from maven artifact \"alien4cloud:alien4cloud-cloudify3-provider\"",
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I create an orchestrator named \"Mount doom orchestrator\" and plugin id \"alien-cloudify-3-orchestrator:1.1.0-SM8-SNAPSHOT\" and bean name \"cloudify-orchestrator\"",
  "keyword": "And ",
  "line": 21,
  "comments": [
    {
      "value": "# Orchestrator and location",
      "line": 20
    }
  ]
});
formatter.step({
  "name": "I get configuration for orchestrator \"Mount doom orchestrator\"",
  "keyword": "And ",
  "line": 22
});
formatter.step({
  "name": "I update cloudify 3 manager\u0027s url to the OpenStack\u0027s jenkins management server for orchestrator with name \"Mount doom orchestrator\"",
  "keyword": "And ",
  "line": 23
});
formatter.step({
  "name": "I enable the orchestrator \"Mount doom orchestrator\"",
  "keyword": "And ",
  "line": 24
});
formatter.step({
  "name": "I create a location named \"Thark location\" and infrastructure type \"openstack\" to the orchestrator \"Mount doom orchestrator\"",
  "keyword": "And ",
  "line": 25
});
formatter.step({
  "name": "I create a resource of type \"alien.nodes.openstack.Flavor\" named \"Small\" related to the location \"Mount doom orchestrator\"/\"Thark location\"",
  "keyword": "And ",
  "line": 26
});
formatter.step({
  "name": "I update the property \"id\" to \"2\" for the resource named \"Small\" related to the location \"Mount doom orchestrator\"/\"Thark location\"",
  "keyword": "And ",
  "line": 27
});
formatter.step({
  "name": "I create a resource of type \"alien.nodes.openstack.Image\" named \"Ubuntu\" related to the location \"Mount doom orchestrator\"/\"Thark location\"",
  "keyword": "And ",
  "line": 28
});
formatter.step({
  "name": "I update the property \"id\" to \"02ddfcbb-9534-44d7-974d-5cfd36dfbcab\" for the resource named \"Ubuntu\" related to the location \"Mount doom orchestrator\"/\"Thark location\"",
  "keyword": "And ",
  "line": 29
});
formatter.step({
  "name": "I autogenerate the on-demand resources for the location \"Mount doom orchestrator\"/\"Thark location\"",
  "keyword": "And ",
  "line": 30
});
formatter.step({
  "name": "I create a resource of type \"alien.nodes.openstack.PublicNetwork\" named \"Internet\" related to the location \"Mount doom orchestrator\"/\"Thark location\"",
  "keyword": "And ",
  "line": 31
});
formatter.step({
  "name": "I update the property complexe \"floating_network_name\" to \"net-pub\" of \"floatingip\" for the resource named \"Internet\" related to the location \"Mount doom orchestrator\"/\"Thark location\"",
  "keyword": "And ",
  "line": 32
});
formatter.step({
  "name": "I create a resource of type \"alien.cloudify.openstack.nodes.Volume\" named \"SmallBlock\" related to the location \"Mount doom orchestrator\"/\"Thark location\"",
  "keyword": "And ",
  "line": 33
});
formatter.step({
  "name": "I update the property \"size\" to \"1 gib\" for the resource named \"SmallBlock\" related to the location \"Mount doom orchestrator\"/\"Thark location\"",
  "keyword": "And ",
  "line": 34
});
formatter.step({
  "name": "I create a resource of type \"alien.nodes.openstack.PublicNetwork\" named \"Internet\" related to the location \"Mount doom orchestrator\"/\"Thark location\"",
  "keyword": "And ",
  "line": 35
});
formatter.step({
  "name": "I update the property complexe \"floating_network_name\" to \"net-pub\" of \"floatingip\" for the resource named \"Internet\" related to the location \"Mount doom orchestrator\"/\"Thark location\"",
  "keyword": "And ",
  "line": 36
});
formatter.step({
  "name": "I create a new application with name \"block-storage-cfy3\" and description \"Block Storage with CFY 3\" based on the template with name \"block_storage\"",
  "keyword": "And ",
  "line": 38
});
formatter.step({
  "name": "I Set a unique location policy to \"Mount doom orchestrator\"/\"Thark location\" for all nodes",
  "keyword": "And ",
  "line": 39
});
formatter.step({
  "name": "I add a node template \"internet\" related to the \"tosca.nodes.Network:1.0.0.wd03-SNAPSHOT\" node type",
  "keyword": "And ",
  "line": 40
});
formatter.step({
  "name": "I add a relationship of type \"tosca.relationships.Network\" defined in archive \"tosca-normative-types\" version \"1.0.0.wd03-SNAPSHOT\" with source \"Compute\" and target \"internet\" for requirement \"network\" of type \"tosca.capabilities.Connectivity\" and target capability \"connection\"",
  "keyword": "And ",
  "line": 41
});
formatter.step({
  "name": "I deploy it",
  "keyword": "When ",
  "line": 43
});
formatter.step({
  "name": "I should receive a RestResponse with no error",
  "keyword": "Then ",
  "line": 44
});
formatter.step({
  "name": "The application\u0027s deployment must succeed after 15 minutes",
  "keyword": "And ",
  "line": 45
});
formatter.step({
  "name": "I upload the local file \"data/block_storage_test_file.txt\" to the node \"Compute\"\u0027s remote path \"/var/cbs1/block_storage_test_file.txt\" with the keypair \"keys/cfy3.pem\" and user \"ubuntu\"",
  "keyword": "When ",
  "line": 47
});
formatter.step({
  "name": "I upload the local file \"data/block_storage_test_file.txt\" to the node \"Compute\"\u0027s remote path \"/var/cbs2/block_storage_test_file.txt\" with the keypair \"keys/cfy3.pem\" and user \"ubuntu\"",
  "keyword": "When ",
  "line": 48
});
formatter.step({
  "name": "I upload the local file \"data/block_storage_test_file.txt\" to the node \"Compute\"\u0027s remote path \"/var/cbs3/block_storage_test_file.txt\" with the keypair \"keys/cfy3.pem\" and user \"ubuntu\"",
  "keyword": "When ",
  "line": 49
});
formatter.step({
  "name": "I upload the local file \"data/block_storage_test_file.txt\" to the node \"Compute\"\u0027s remote path \"/var/cbs4/block_storage_test_file.txt\" with the keypair \"keys/cfy3.pem\" and user \"ubuntu\"",
  "keyword": "When ",
  "line": 50
});
formatter.step({
  "name": "I re-deploy the application",
  "keyword": "And ",
  "line": 52
});
formatter.step({
  "name": "The application\u0027s deployment must succeed after 15 minutes",
  "keyword": "Then ",
  "line": 53
});
formatter.step({
  "name": "I download the remote file \"/var/cbs1/block_storage_test_file.txt\" from the node \"Compute\" with the keypair \"keys/cfy3.pem\" and user \"ubuntu\"",
  "keyword": "When ",
  "line": 55
});
formatter.step({
  "name": "The downloaded file should have the same content as the local file \"data/block_storage_test_file.txt\"",
  "keyword": "Then ",
  "line": 56
});
formatter.step({
  "name": "I download the remote file \"/var/cbs2/block_storage_test_file.txt\" from the node \"Compute\" with the keypair \"keys/cfy3.pem\" and user \"ubuntu\"",
  "keyword": "When ",
  "line": 57
});
formatter.step({
  "name": "The downloaded file should have the same content as the local file \"data/block_storage_test_file.txt\"",
  "keyword": "Then ",
  "line": 58
});
formatter.step({
  "name": "I download the remote file \"/var/cbs3/block_storage_test_file.txt\" from the node \"Compute\" with the keypair \"keys/cfy3.pem\" and user \"ubuntu\"",
  "keyword": "When ",
  "line": 59
});
formatter.step({
  "name": "The downloaded file should have the same content as the local file \"data/block_storage_test_file.txt\"",
  "keyword": "Then ",
  "line": 60
});
formatter.step({
  "name": "I download the remote file \"/var/cbs4/block_storage_test_file.txt\" from the node \"Compute\" with the keypair \"keys/cfy3.pem\" and user \"ubuntu\"",
  "keyword": "When ",
  "line": 61
});
formatter.step({
  "name": "The downloaded file should have the same content as the local file \"data/block_storage_test_file.txt\"",
  "keyword": "Then ",
  "line": 62
});
formatter.step({
  "name": "I undeploy it",
  "keyword": "When ",
  "line": 63
});
formatter.step({
  "name": "I should have a volume on OpenStack with id defined in property \"volume_id\" of the node \"CBS1\" for \"block-storage-cfy3\"",
  "keyword": "Then ",
  "line": 64
});
formatter.step({
  "name": "I should have a volume on OpenStack with id defined in property \"volume_id\" of the node \"CBS2\" for \"block-storage-cfy3\"",
  "keyword": "Then ",
  "line": 65
});
formatter.step({
  "name": "I should have a volume on OpenStack with id defined in property \"volume_id\" of the node \"CBS3\" for \"block-storage-cfy3\"",
  "keyword": "Then ",
  "line": 66
});
formatter.step({
  "name": "I should have a volume on OpenStack with id defined in property \"volume_id\" of the node \"CBS4\" for \"block-storage-cfy3\"",
  "keyword": "Then ",
  "line": 67
});
formatter.step({
  "name": "I delete the volume on OpenStack with id defined in property \"volume_id\" of the node \"CBS1\" for \"block-storage-cfy3\"",
  "keyword": "Then ",
  "line": 68
});
formatter.step({
  "name": "I delete the volume on OpenStack with id defined in property \"volume_id\" of the node \"CBS2\" for \"block-storage-cfy3\"",
  "keyword": "Then ",
  "line": 69
});
formatter.step({
  "name": "I delete the volume on OpenStack with id defined in property \"volume_id\" of the node \"CBS3\" for \"block-storage-cfy3\"",
  "keyword": "Then ",
  "line": 70
});
formatter.step({
  "name": "I delete the volume on OpenStack with id defined in property \"volume_id\" of the node \"CBS4\" for \"block-storage-cfy3\"",
  "keyword": "Then ",
  "line": 71
});
formatter.match({
  "arguments": [
    {
      "val": "ADMIN",
      "offset": 25
    }
  ],
  "location": "AuthenticationStepDefinitions.I_am_authenticated_with_role(String)"
});
formatter.result({
  "duration": 533619742,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://github.com/alien4cloud/tosca-normative-types.git",
      "offset": 37
    },
    {
      "val": "master",
      "offset": 103
    }
  ],
  "location": "Setup.I_checkout_the_git_archive_from_url_branch(String,String)"
});
formatter.result({
  "duration": 147158801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tosca-normative-types",
      "offset": 26
    }
  ],
  "location": "Setup.I_upload_the_git_archive(String)"
});
formatter.result({
  "duration": 4627773077,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://github.com/alien4cloud/alien4cloud-extended-types.git",
      "offset": 37
    },
    {
      "val": "master",
      "offset": 108
    }
  ],
  "location": "Setup.I_checkout_the_git_archive_from_url_branch(String,String)"
});
formatter.result({
  "duration": 10752467,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alien4cloud-extended-types/alien-base-types-1.0-SNAPSHOT",
      "offset": 26
    }
  ],
  "location": "Setup.I_upload_the_git_archive(String)"
});
formatter.result({
  "duration": 955170693,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alien4cloud-extended-types/alien-extended-storage-types-1.0-SNAPSHOT",
      "offset": 26
    }
  ],
  "location": "Setup.I_upload_the_git_archive(String)"
});
formatter.result({
  "duration": 462207324,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "topologies/block_storage.yaml",
      "offset": 28
    }
  ],
  "location": "Setup.I_upload_the_local_archive(String)"
});
formatter.result({
  "duration": 700741423,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "../alien4cloud-cloudify3-provider",
      "offset": 24
    }
  ],
  "location": "PluginDefinitionsSteps.I_upload_a_plugin_from(String)"
});
formatter.result({
  "duration": 357871591,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mount doom orchestrator",
      "offset": 32
    },
    {
      "val": "alien-cloudify-3-orchestrator:1.1.0-SM8-SNAPSHOT",
      "offset": 72
    },
    {
      "val": "cloudify-orchestrator",
      "offset": 137
    }
  ],
  "location": "OrchestratorsDefinitionsSteps.I_create_an_orchestrator_named_and_plugin_id_and_bean_name(String,String,String)"
});
formatter.result({
  "duration": 242089063,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mount doom orchestrator",
      "offset": 38
    }
  ],
  "location": "OrchestratorsConfigurationDefinitionsSteps.I_get_configuration_for_orchestrator(String)"
});
formatter.result({
  "duration": 68663236,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    },
    {
      "val": "Mount doom orchestrator",
      "offset": 107
    }
  ],
  "location": "OrchestratorsConfigurationDefinitionsSteps.I_update_cloudify_manager_s_url_to_the_OpenStack_s_jenkins_management_server_for_cloud_with_name(int,String)"
});
formatter.result({
  "duration": 5359308468,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mount doom orchestrator",
      "offset": 27
    }
  ],
  "location": "OrchestratorsDefinitionsSteps.I_enable_the_orchestrator(String)"
});
formatter.result({
  "duration": 1686618573,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thark location",
      "offset": 27
    },
    {
      "val": "openstack",
      "offset": 68
    },
    {
      "val": "Mount doom orchestrator",
      "offset": 100
    }
  ],
  "location": "LocationsDefinitionsSteps.I_create_a_location_named_and_infrastructure_type_to_the_orchestrator(String,String,String)"
});
formatter.result({
  "duration": 485485857,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alien.nodes.openstack.Flavor",
      "offset": 29
    },
    {
      "val": "Small",
      "offset": 66
    },
    {
      "val": "Mount doom orchestrator",
      "offset": 98
    },
    {
      "val": "Thark location",
      "offset": 124
    }
  ],
  "location": "OrchestrationLocationResourceSteps.I_create_a_resource_of_type_named_related_to_the_location_(String,String,String,String)"
});
formatter.result({
  "duration": 267182185,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "id",
      "offset": 23
    },
    {
      "val": "2",
      "offset": 31
    },
    {
      "val": "Small",
      "offset": 58
    },
    {
      "val": "Mount doom orchestrator",
      "offset": 90
    },
    {
      "val": "Thark location",
      "offset": 116
    }
  ],
  "location": "OrchestrationLocationResourceSteps.I_update_the_property_to_for_the_resource_named_related_to_the_location_(String,String,String,String,String)"
});
formatter.result({
  "duration": 62789579,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alien.nodes.openstack.Image",
      "offset": 29
    },
    {
      "val": "Ubuntu",
      "offset": 65
    },
    {
      "val": "Mount doom orchestrator",
      "offset": 98
    },
    {
      "val": "Thark location",
      "offset": 124
    }
  ],
  "location": "OrchestrationLocationResourceSteps.I_create_a_resource_of_type_named_related_to_the_location_(String,String,String,String)"
});
formatter.result({
  "duration": 55312845,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "id",
      "offset": 23
    },
    {
      "val": "02ddfcbb-9534-44d7-974d-5cfd36dfbcab",
      "offset": 31
    },
    {
      "val": "Ubuntu",
      "offset": 93
    },
    {
      "val": "Mount doom orchestrator",
      "offset": 126
    },
    {
      "val": "Thark location",
      "offset": 152
    }
  ],
  "location": "OrchestrationLocationResourceSteps.I_update_the_property_to_for_the_resource_named_related_to_the_location_(String,String,String,String,String)"
});
formatter.result({
  "duration": 40981199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mount doom orchestrator",
      "offset": 57
    },
    {
      "val": "Thark location",
      "offset": 83
    }
  ],
  "location": "OrchestrationLocationResourceSteps.I_autogenerate_the_on_demand_resources_for_the_location_(String,String)"
});
formatter.result({
  "duration": 177059499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alien.nodes.openstack.PublicNetwork",
      "offset": 29
    },
    {
      "val": "Internet",
      "offset": 73
    },
    {
      "val": "Mount doom orchestrator",
      "offset": 108
    },
    {
      "val": "Thark location",
      "offset": 134
    }
  ],
  "location": "OrchestrationLocationResourceSteps.I_create_a_resource_of_type_named_related_to_the_location_(String,String,String,String)"
});
formatter.result({
  "duration": 50045089,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "floating_network_name",
      "offset": 32
    },
    {
      "val": "net-pub",
      "offset": 59
    },
    {
      "val": "floatingip",
      "offset": 72
    },
    {
      "val": "Internet",
      "offset": 108
    },
    {
      "val": "Mount doom orchestrator",
      "offset": 143
    },
    {
      "val": "Thark location",
      "offset": 169
    }
  ],
  "location": "OrchestrationLocationResourceSteps.I_update_the_property_complexe_to_of_for_the_resource_named_related_to_the_location_(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 94363687,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alien.cloudify.openstack.nodes.Volume",
      "offset": 29
    },
    {
      "val": "SmallBlock",
      "offset": 75
    },
    {
      "val": "Mount doom orchestrator",
      "offset": 112
    },
    {
      "val": "Thark location",
      "offset": 138
    }
  ],
  "location": "OrchestrationLocationResourceSteps.I_create_a_resource_of_type_named_related_to_the_location_(String,String,String,String)"
});
formatter.result({
  "duration": 67240201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "size",
      "offset": 23
    },
    {
      "val": "1 gib",
      "offset": 33
    },
    {
      "val": "SmallBlock",
      "offset": 64
    },
    {
      "val": "Mount doom orchestrator",
      "offset": 101
    },
    {
      "val": "Thark location",
      "offset": 127
    }
  ],
  "location": "OrchestrationLocationResourceSteps.I_update_the_property_to_for_the_resource_named_related_to_the_location_(String,String,String,String,String)"
});
formatter.result({
  "duration": 61961190,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alien.nodes.openstack.PublicNetwork",
      "offset": 29
    },
    {
      "val": "Internet",
      "offset": 73
    },
    {
      "val": "Mount doom orchestrator",
      "offset": 108
    },
    {
      "val": "Thark location",
      "offset": 134
    }
  ],
  "location": "OrchestrationLocationResourceSteps.I_create_a_resource_of_type_named_related_to_the_location_(String,String,String,String)"
});
formatter.result({
  "duration": 44426882,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "floating_network_name",
      "offset": 32
    },
    {
      "val": "net-pub",
      "offset": 59
    },
    {
      "val": "floatingip",
      "offset": 72
    },
    {
      "val": "Internet",
      "offset": 108
    },
    {
      "val": "Mount doom orchestrator",
      "offset": 143
    },
    {
      "val": "Thark location",
      "offset": 169
    }
  ],
  "location": "OrchestrationLocationResourceSteps.I_update_the_property_complexe_to_of_for_the_resource_named_related_to_the_location_(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 36392681,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "block-storage-cfy3",
      "offset": 38
    },
    {
      "val": "Block Storage with CFY 3",
      "offset": 75
    },
    {
      "val": "block_storage",
      "offset": 134
    }
  ],
  "location": "ApplicationStepDefinitions.I_create_a_new_application_with_name_and_description_based_on_the_template_with_name(String,String,String)"
});
formatter.result({
  "duration": 381206641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mount doom orchestrator",
      "offset": 35
    },
    {
      "val": "Thark location",
      "offset": 61
    }
  ],
  "location": "DeploymentTopologyStepDefinitions.I_Set_a_unique_location_policy_to_for_all_nodes(String,String)"
});
formatter.result({
  "duration": 738170230,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "internet",
      "offset": 23
    },
    {
      "val": "tosca.nodes.Network:1.0.0.wd03-SNAPSHOT",
      "offset": 49
    }
  ],
  "location": "TopologyStepDefinitions.I_add_a_node_template_related_to_the_node_type(String,String)"
});
formatter.result({
  "duration": 39358092,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tosca.relationships.Network",
      "offset": 30
    },
    {
      "val": "tosca-normative-types",
      "offset": 79
    },
    {
      "val": "1.0.0.wd03-SNAPSHOT",
      "offset": 111
    },
    {
      "val": "Compute",
      "offset": 145
    },
    {
      "val": "internet",
      "offset": 166
    },
    {
      "val": "network",
      "offset": 193
    },
    {
      "val": "tosca.capabilities.Connectivity",
      "offset": 211
    },
    {
      "val": "connection",
      "offset": 267
    }
  ],
  "location": "TopologyStepDefinitions.I_add_a_relationship_of_type_with_source_and_target_for_requirement_of_type_and_target_capability(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 42612826,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationsDeploymentStepDefinitions.I_deploy_it()"
});
formatter.result({
  "duration": 859745475,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.I_should_receive_a_RestResponse_with_no_error()"
});
formatter.result({
  "duration": 3571562,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 48
    }
  ],
  "location": "ApplicationsDeploymentStepDefinitions.The_application_s_deployment_must_succeed_after_minutes(long)"
});
formatter.result({
  "duration": 214714537318,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data/block_storage_test_file.txt",
      "offset": 25
    },
    {
      "val": "Compute",
      "offset": 72
    },
    {
      "val": "/var/cbs1/block_storage_test_file.txt",
      "offset": 96
    },
    {
      "val": "keys/cfy3.pem",
      "offset": 153
    },
    {
      "val": "ubuntu",
      "offset": 178
    }
  ],
  "location": "ScpStepsDefinitions.I_upload_the_local_file_to_the_node_s_remote_path_with_the_keypair_and_user(String,String,String,String,String)"
});
formatter.result({
  "duration": 2277669205,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data/block_storage_test_file.txt",
      "offset": 25
    },
    {
      "val": "Compute",
      "offset": 72
    },
    {
      "val": "/var/cbs2/block_storage_test_file.txt",
      "offset": 96
    },
    {
      "val": "keys/cfy3.pem",
      "offset": 153
    },
    {
      "val": "ubuntu",
      "offset": 178
    }
  ],
  "location": "ScpStepsDefinitions.I_upload_the_local_file_to_the_node_s_remote_path_with_the_keypair_and_user(String,String,String,String,String)"
});
formatter.result({
  "duration": 2009371205,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data/block_storage_test_file.txt",
      "offset": 25
    },
    {
      "val": "Compute",
      "offset": 72
    },
    {
      "val": "/var/cbs3/block_storage_test_file.txt",
      "offset": 96
    },
    {
      "val": "keys/cfy3.pem",
      "offset": 153
    },
    {
      "val": "ubuntu",
      "offset": 178
    }
  ],
  "location": "ScpStepsDefinitions.I_upload_the_local_file_to_the_node_s_remote_path_with_the_keypair_and_user(String,String,String,String,String)"
});
formatter.result({
  "duration": 1540533154,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data/block_storage_test_file.txt",
      "offset": 25
    },
    {
      "val": "Compute",
      "offset": 72
    },
    {
      "val": "/var/cbs4/block_storage_test_file.txt",
      "offset": 96
    },
    {
      "val": "keys/cfy3.pem",
      "offset": 153
    },
    {
      "val": "ubuntu",
      "offset": 178
    }
  ],
  "location": "ScpStepsDefinitions.I_upload_the_local_file_to_the_node_s_remote_path_with_the_keypair_and_user(String,String,String,String,String)"
});
formatter.result({
  "duration": 1831727722,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationsDeploymentStepDefinitions.I_re_deploy_the_application()"
});
formatter.result({
  "duration": 133786538653,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 48
    }
  ],
  "location": "ApplicationsDeploymentStepDefinitions.The_application_s_deployment_must_succeed_after_minutes(long)"
});
formatter.result({
  "duration": 230561961322,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/var/cbs1/block_storage_test_file.txt",
      "offset": 28
    },
    {
      "val": "Compute",
      "offset": 82
    },
    {
      "val": "keys/cfy3.pem",
      "offset": 109
    },
    {
      "val": "ubuntu",
      "offset": 134
    }
  ],
  "location": "ScpStepsDefinitions.I_download_the_remote_file_from_the_node_with_the_keypair_and_user(String,String,String,String)"
});
formatter.result({
  "duration": 1569670998,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data/block_storage_test_file.txt",
      "offset": 68
    }
  ],
  "location": "ScpStepsDefinitions.The_downloaded_file_should_have_the_same_content_as_the_local_file(String)"
});
formatter.result({
  "duration": 4791458,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/var/cbs2/block_storage_test_file.txt",
      "offset": 28
    },
    {
      "val": "Compute",
      "offset": 82
    },
    {
      "val": "keys/cfy3.pem",
      "offset": 109
    },
    {
      "val": "ubuntu",
      "offset": 134
    }
  ],
  "location": "ScpStepsDefinitions.I_download_the_remote_file_from_the_node_with_the_keypair_and_user(String,String,String,String)"
});
formatter.result({
  "duration": 1672242961,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data/block_storage_test_file.txt",
      "offset": 68
    }
  ],
  "location": "ScpStepsDefinitions.The_downloaded_file_should_have_the_same_content_as_the_local_file(String)"
});
formatter.result({
  "duration": 271559,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/var/cbs3/block_storage_test_file.txt",
      "offset": 28
    },
    {
      "val": "Compute",
      "offset": 82
    },
    {
      "val": "keys/cfy3.pem",
      "offset": 109
    },
    {
      "val": "ubuntu",
      "offset": 134
    }
  ],
  "location": "ScpStepsDefinitions.I_download_the_remote_file_from_the_node_with_the_keypair_and_user(String,String,String,String)"
});
formatter.result({
  "duration": 1409015844,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data/block_storage_test_file.txt",
      "offset": 68
    }
  ],
  "location": "ScpStepsDefinitions.The_downloaded_file_should_have_the_same_content_as_the_local_file(String)"
});
formatter.result({
  "duration": 339945,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/var/cbs4/block_storage_test_file.txt",
      "offset": 28
    },
    {
      "val": "Compute",
      "offset": 82
    },
    {
      "val": "keys/cfy3.pem",
      "offset": 109
    },
    {
      "val": "ubuntu",
      "offset": 134
    }
  ],
  "location": "ScpStepsDefinitions.I_download_the_remote_file_from_the_node_with_the_keypair_and_user(String,String,String,String)"
});
formatter.result({
  "duration": 1470521412,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data/block_storage_test_file.txt",
      "offset": 68
    }
  ],
  "location": "ScpStepsDefinitions.The_downloaded_file_should_have_the_same_content_as_the_local_file(String)"
});
formatter.result({
  "duration": 836963,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationsDeploymentStepDefinitions.I_undeploy_it()"
});
formatter.result({
  "duration": 88203948846,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "volume_id",
      "offset": 65
    },
    {
      "val": "CBS1",
      "offset": 89
    },
    {
      "val": "block-storage-cfy3",
      "offset": 100
    }
  ],
  "location": "OpenStacksStepDefinitions.I_should_have_a_volume_on_OpenStack_with_id_defined_in_property_of_the_node(String,String,String)"
});
formatter.result({
  "duration": 1765022157,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "volume_id",
      "offset": 65
    },
    {
      "val": "CBS2",
      "offset": 89
    },
    {
      "val": "block-storage-cfy3",
      "offset": 100
    }
  ],
  "location": "OpenStacksStepDefinitions.I_should_have_a_volume_on_OpenStack_with_id_defined_in_property_of_the_node(String,String,String)"
});
formatter.result({
  "duration": 448744297,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "volume_id",
      "offset": 65
    },
    {
      "val": "CBS3",
      "offset": 89
    },
    {
      "val": "block-storage-cfy3",
      "offset": 100
    }
  ],
  "location": "OpenStacksStepDefinitions.I_should_have_a_volume_on_OpenStack_with_id_defined_in_property_of_the_node(String,String,String)"
});
formatter.result({
  "duration": 666081139,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "volume_id",
      "offset": 65
    },
    {
      "val": "CBS4",
      "offset": 89
    },
    {
      "val": "block-storage-cfy3",
      "offset": 100
    }
  ],
  "location": "OpenStacksStepDefinitions.I_should_have_a_volume_on_OpenStack_with_id_defined_in_property_of_the_node(String,String,String)"
});
formatter.result({
  "duration": 534952435,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "volume_id",
      "offset": 62
    },
    {
      "val": "CBS1",
      "offset": 86
    },
    {
      "val": "block-storage-cfy3",
      "offset": 97
    }
  ],
  "location": "OpenStacksStepDefinitions.I_delete_the_volume_on_OpenStack_with_id_defined_in_property_of_the_node(String,String,String)"
});
formatter.result({
  "duration": 492805307,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "volume_id",
      "offset": 62
    },
    {
      "val": "CBS2",
      "offset": 86
    },
    {
      "val": "block-storage-cfy3",
      "offset": 97
    }
  ],
  "location": "OpenStacksStepDefinitions.I_delete_the_volume_on_OpenStack_with_id_defined_in_property_of_the_node(String,String,String)"
});
formatter.result({
  "duration": 533325996,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "volume_id",
      "offset": 62
    },
    {
      "val": "CBS3",
      "offset": 86
    },
    {
      "val": "block-storage-cfy3",
      "offset": 97
    }
  ],
  "location": "OpenStacksStepDefinitions.I_delete_the_volume_on_OpenStack_with_id_defined_in_property_of_the_node(String,String,String)"
});
formatter.result({
  "duration": 362270884,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "volume_id",
      "offset": 62
    },
    {
      "val": "CBS4",
      "offset": 86
    },
    {
      "val": "block-storage-cfy3",
      "offset": 97
    }
  ],
  "location": "OpenStacksStepDefinitions.I_delete_the_volume_on_OpenStack_with_id_defined_in_property_of_the_node(String,String,String)"
});
formatter.result({
  "duration": 387817019,
  "status": "passed"
});
formatter.after({
  "duration": 50479400,
  "status": "passed"
});
});