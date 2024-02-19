/**
 * Given a SchemaModel from a ModelIntrospectionSchema, returns the primary key
 * as an array of field names.
 *
 * @param model The model object
 * @returns Array of field names
 */
function resolvePKFields(model) {
    const { primaryKeyFieldName, sortKeyFieldNames } = model.primaryKeyInfo;
    return [primaryKeyFieldName, ...sortKeyFieldNames];
}

export { resolvePKFields };
//# sourceMappingURL=resolvePKFields.mjs.map
