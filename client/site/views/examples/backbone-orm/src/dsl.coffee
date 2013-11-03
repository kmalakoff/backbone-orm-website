module.exports =
  # select properties
  task:             {$select: ['id', 'name']}

  # relationship select properties
  project:          {$select: ['id', 'name']}

  # relationship render function
  project_custom:   (model, options, callback) ->
    callback(null, _.pick(model.attributes, 'id', 'name'))

  # relationship inferred with query
  commits:          {query: {active: false}}

  # relationship with opertation
  total_commits:    {key: 'commits', query: {$count: true}}
