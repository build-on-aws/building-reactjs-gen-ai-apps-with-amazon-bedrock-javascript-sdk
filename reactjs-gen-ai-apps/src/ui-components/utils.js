/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchUserAttributes, signOut } from "aws-amplify/auth";
import { DataStore } from "aws-amplify/datastore";
import { Hub } from "aws-amplify/utils";
export const UI_CHANNEL = "ui";
export const UI_EVENT_TYPE_ACTIONS = "actions";
export const CATEGORY_AUTH = "auth";
export const CATEGORY_DATASTORE = "datastore";
export const CATEGORY_CORE = "core";
export const ACTION_AUTH_SIGNOUT = "signout";
export const ACTION_NAVIGATE = "navigate";
export const ACTION_DATASTORE_CREATE = "create";
export const ACTION_DATASTORE_DELETE = "delete";
export const ACTION_DATASTORE_UPDATE = "update";
export const ACTION_STATE_MUTATION = "statemutation";
export const STATUS_STARTED = "started";
export const STATUS_FINISHED = "finished";
export const EVENT_ACTION_AUTH = `${UI_EVENT_TYPE_ACTIONS}:${CATEGORY_AUTH}`;
export const EVENT_ACTION_AUTH_SIGNOUT = `${EVENT_ACTION_AUTH}:${ACTION_AUTH_SIGNOUT}`;
export const ACTION_AUTH_SIGNOUT_STARTED = `${EVENT_ACTION_AUTH_SIGNOUT}:${STATUS_STARTED}`;
export const ACTION_AUTH_SIGNOUT_FINISHED = `${EVENT_ACTION_AUTH_SIGNOUT}:${STATUS_FINISHED}`;
export const EVENT_ACTION_CORE = `${UI_EVENT_TYPE_ACTIONS}:${CATEGORY_CORE}`;
export const EVENT_ACTION_CORE_STATE_MUTATION = `${EVENT_ACTION_CORE}:${ACTION_STATE_MUTATION}`;
export const ACTION_STATE_MUTATION_STARTED = `${EVENT_ACTION_CORE_STATE_MUTATION}:${STATUS_STARTED}`;
export const ACTION_STATE_MUTATION_FINISHED = `${EVENT_ACTION_CORE_STATE_MUTATION}:${STATUS_FINISHED}`;
export const EVENT_ACTION_CORE_NAVIGATE = `${EVENT_ACTION_CORE}:${ACTION_NAVIGATE}`;
export const ACTION_NAVIGATE_STARTED = `${EVENT_ACTION_CORE_NAVIGATE}:${STATUS_STARTED}`;
export const ACTION_NAVIGATE_FINISHED = `${EVENT_ACTION_CORE_NAVIGATE}:${STATUS_FINISHED}`;
export const EVENT_ACTION_DATASTORE = `${UI_EVENT_TYPE_ACTIONS}:${CATEGORY_DATASTORE}`;
export const EVENT_ACTION_DATASTORE_CREATE = `${EVENT_ACTION_DATASTORE}:${ACTION_DATASTORE_CREATE}`;
export const ACTION_DATASTORE_CREATE_STARTED = `${EVENT_ACTION_DATASTORE_CREATE}:${STATUS_STARTED}`;
export const ACTION_DATASTORE_CREATE_FINISHED = `${EVENT_ACTION_DATASTORE_CREATE}:${STATUS_FINISHED}`;
export const EVENT_ACTION_DATASTORE_DELETE = `${EVENT_ACTION_DATASTORE}:${ACTION_DATASTORE_DELETE}`;
export const ACTION_DATASTORE_DELETE_STARTED = `${EVENT_ACTION_DATASTORE_DELETE}:${STATUS_STARTED}`;
export const ACTION_DATASTORE_DELETE_FINISHED = `${EVENT_ACTION_DATASTORE_DELETE}:${STATUS_FINISHED}`;
export const EVENT_ACTION_DATASTORE_UPDATE = `${EVENT_ACTION_DATASTORE}:${ACTION_DATASTORE_UPDATE}`;
export const ACTION_DATASTORE_UPDATE_STARTED = `${EVENT_ACTION_DATASTORE_UPDATE}:${STATUS_STARTED}`;
export const ACTION_DATASTORE_UPDATE_FINISHED = `${EVENT_ACTION_DATASTORE_UPDATE}:${STATUS_FINISHED}`;
export const DATASTORE_QUERY_BY_ID_ERROR =
  "Error querying datastore item by id";
export const AMPLIFY_SYMBOL =
  typeof Symbol !== "undefined" && typeof Symbol.for === "function"
    ? Symbol.for("amplify_default")
    : "@@amplify_default";
export const useStateMutationAction = (initialState) => {
  const [state, setState] = React.useState(initialState);
  const setNewState = React.useCallback(
    (newState) => {
      const prevState = state;
      Hub.dispatch(
        UI_CHANNEL,
        {
          event: ACTION_STATE_MUTATION_STARTED,
          data: { prevState, newState },
        },
        EVENT_ACTION_CORE_STATE_MUTATION,
        AMPLIFY_SYMBOL
      );
      setState(newState);
      Hub.dispatch(
        UI_CHANNEL,
        {
          event: ACTION_STATE_MUTATION_FINISHED,
          data: { prevState, newState },
        },
        EVENT_ACTION_CORE_STATE_MUTATION,
        AMPLIFY_SYMBOL
      );
    },
    [state]
  );
  return [state, setNewState];
};
export const useNavigateAction = (options) => {
  const { type, url, anchor, target } = options;
  const run = React.useMemo(() => {
    switch (type) {
      case "url":
        return () => {
          window.open(url, target || "_self", "noopener noreferrer");
        };
      case "anchor":
        return () => {
          window.location.hash = anchor ?? "";
        };
      case "reload":
        return () => {
          window.location.reload();
        };
      default:
        return () => {
          // eslint-disable-next-line no-console
          console.warn(
            'Please provide a valid navigate type. Available types are "url", "anchor" and "reload".'
          );
        };
    }
  }, [anchor, target, type, url]);
  const navigateAction = () => {
    Hub.dispatch(
      UI_CHANNEL,
      {
        event: ACTION_NAVIGATE_STARTED,
        data: options,
      },
      EVENT_ACTION_CORE_NAVIGATE,
      AMPLIFY_SYMBOL
    );
    run();
    Hub.dispatch(
      UI_CHANNEL,
      {
        event: ACTION_NAVIGATE_FINISHED,
        data: options,
      },
      EVENT_ACTION_CORE_NAVIGATE,
      AMPLIFY_SYMBOL
    );
  };
  return navigateAction;
};
export const findChildOverrides = (overrides, elementHierarchy) => {
  if (!overrides) {
    return null;
  }
  const filteredOverrides = Object.entries(overrides).filter((m) =>
    m[0].startsWith(elementHierarchy)
  );
  return Object.assign(
    {},
    ...Array.from(filteredOverrides, ([k, v]) => ({
      [k.replace(elementHierarchy, "")]: v,
    }))
  );
};
export const getOverrideProps = (overrides, elementHierarchy) => {
  if (!overrides) {
    return null;
  }
  const componentOverrides = Object.entries(overrides)
    .filter(([key]) => key === elementHierarchy)
    .flatMap(([, value]) => Object.entries(value))
    .filter((m) => m?.[0]);
  return Object.fromEntries(componentOverrides);
};
export function getOverridesFromVariants(variants, props) {
  const variantValueKeys = [
    ...new Set(
      variants.flatMap((variant) => Object.keys(variant.variantValues))
    ),
  ];
  const variantValuesFromProps = Object.keys(props)
    .filter((i) => variantValueKeys.includes(i) && props[i])
    .reduce((acc, key) => {
      return {
        ...acc,
        [key]: props[key],
      };
    }, {});
  const matchedVariants = variants.filter(({ variantValues }) => {
    return (
      Object.keys(variantValues).length ===
        Object.keys(variantValuesFromProps).length &&
      Object.entries(variantValues).every(
        ([key, value]) => variantValuesFromProps[key] === value
      )
    );
  });
  return matchedVariants.reduce((overrides, variant) => {
    return { ...overrides, ...variant.overrides };
  }, {});
}
export const mergeVariantsAndOverrides = (variants, overrides) => {
  if (!variants && !overrides) {
    return null;
  }
  if (!overrides) {
    return variants;
  }
  if (!variants) {
    return overrides;
  }
  const overrideKeys = new Set(Object.keys(overrides));
  const sharedKeys = Object.keys(variants).filter((variantKey) =>
    overrideKeys.has(variantKey)
  );
  const merged = Object.fromEntries(
    sharedKeys.map((sharedKey) => [
      sharedKey,
      { ...variants[sharedKey], ...overrides[sharedKey] },
    ])
  );
  return {
    ...variants,
    ...overrides,
    ...merged,
  };
};
export const isErrorWithMessage = (error) => {
  return (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof error.message === "string"
  );
};
export const toErrorWithMessage = (maybeError) => {
  if (isErrorWithMessage(maybeError)) return maybeError;
  try {
    return new Error(JSON.stringify(maybeError));
  } catch {
    return new Error(String(maybeError));
  }
};
export const getErrorMessage = (error) => {
  return toErrorWithMessage(error).message;
};
export const useTypeCastFields = ({ fields, modelName, schema }) => {
  return React.useMemo(() => {
    if (!schema) {
      return fields;
    }
    const castFields = {};
    Object.keys(fields).forEach((fieldName) => {
      const field = fields[fieldName];
      switch (schema?.models[modelName]?.fields?.[fieldName]?.type) {
        case "AWSTimestamp":
          castFields[fieldName] = Number(field);
          break;
        case "Boolean":
          castFields[fieldName] = Boolean(field);
          break;
        case "Int":
          castFields[fieldName] =
            typeof field === "string" ||
            (typeof field === "object" &&
              Object.prototype.toString.call(field) === "[object String]")
              ? parseInt(field)
              : field;
          break;
        case "Float":
          castFields[fieldName] = Number(field);
          break;
        default:
          castFields[fieldName] = field;
          break;
      }
    });
    return castFields;
  }, [fields, schema, modelName]);
};
export const useDataStoreCreateAction = ({
  model,
  fields: initialFields,
  schema,
}) => {
  const fields = useTypeCastFields({
    fields: initialFields,
    modelName: model.name,
    schema,
  });
  return async () => {
    try {
      Hub.dispatch(
        UI_CHANNEL,
        {
          event: ACTION_DATASTORE_CREATE_STARTED,
          data: { fields },
        },
        EVENT_ACTION_DATASTORE_CREATE,
        AMPLIFY_SYMBOL
      );
      const item = await DataStore.save(new model(fields));
      Hub.dispatch(
        UI_CHANNEL,
        {
          event: ACTION_DATASTORE_CREATE_FINISHED,
          data: { fields, item },
        },
        EVENT_ACTION_DATASTORE_CREATE,
        AMPLIFY_SYMBOL
      );
    } catch (error) {
      Hub.dispatch(
        UI_CHANNEL,
        {
          event: ACTION_DATASTORE_CREATE_FINISHED,
          data: {
            fields,
            errorMessage: getErrorMessage(error),
          },
        },
        EVENT_ACTION_DATASTORE_CREATE,
        AMPLIFY_SYMBOL
      );
    }
  };
};
export const useDataStoreUpdateAction = ({
  fields: initialFields,
  id,
  model,
  schema,
}) => {
  const fields = useTypeCastFields({
    fields: initialFields,
    modelName: model.name,
    schema,
  });
  return async () => {
    try {
      Hub.dispatch(
        UI_CHANNEL,
        {
          event: ACTION_DATASTORE_UPDATE_STARTED,
          data: { fields, id },
        },
        EVENT_ACTION_DATASTORE_UPDATE,
        AMPLIFY_SYMBOL
      );
      const original = await DataStore.query(model, id);
      if (!original) {
        throw new Error(`${DATASTORE_QUERY_BY_ID_ERROR}: ${id}`);
      }
      const item = await DataStore.save(
        model.copyOf(original, (updated) => {
          Object.assign(updated, fields);
        })
      );
      Hub.dispatch(
        UI_CHANNEL,
        {
          event: ACTION_DATASTORE_UPDATE_FINISHED,
          data: { fields, id, item },
        },
        EVENT_ACTION_DATASTORE_UPDATE,
        AMPLIFY_SYMBOL
      );
    } catch (error) {
      Hub.dispatch(
        UI_CHANNEL,
        {
          event: ACTION_DATASTORE_UPDATE_FINISHED,
          data: {
            fields,
            id,
            errorMessage: getErrorMessage(error),
          },
        },
        EVENT_ACTION_DATASTORE_UPDATE,
        AMPLIFY_SYMBOL
      );
    }
  };
};
export const useDataStoreDeleteAction =
  ({ model, id }) =>
  async () => {
    try {
      Hub.dispatch(
        UI_CHANNEL,
        {
          event: ACTION_DATASTORE_DELETE_STARTED,
          data: { id },
        },
        EVENT_ACTION_DATASTORE_DELETE,
        AMPLIFY_SYMBOL
      );
      await DataStore.delete(model, id);
      Hub.dispatch(
        UI_CHANNEL,
        {
          event: ACTION_DATASTORE_DELETE_FINISHED,
          data: { id },
        },
        EVENT_ACTION_DATASTORE_DELETE,
        AMPLIFY_SYMBOL
      );
    } catch (error) {
      Hub.dispatch(
        UI_CHANNEL,
        {
          event: ACTION_DATASTORE_DELETE_FINISHED,
          data: { id, errorMessage: getErrorMessage(error) },
        },
        EVENT_ACTION_DATASTORE_DELETE,
        AMPLIFY_SYMBOL
      );
    }
  };
export const createDataStorePredicate = (predicateObject) => {
  const {
    and: groupAnd,
    or: groupOr,
    field,
    operator,
    operand,
  } = predicateObject;
  if (Array.isArray(groupAnd)) {
    const predicates = groupAnd.map((condition) =>
      createDataStorePredicate(condition)
    );
    return (p) =>
      p.and((model) => predicates.map((predicate) => predicate(model)));
  }
  if (Array.isArray(groupOr)) {
    const predicates = groupOr.map((condition) =>
      createDataStorePredicate(condition)
    );
    return (p) =>
      p.or((model) => predicates.map((predicate) => predicate(model)));
  }
  return (p) => {
    if (!!field && !!operator && p?.[field]?.[operator]) {
      return p[field][operator](operand);
    }
    return p;
  };
};
export const useDataStoreCollection = ({ model, criteria, pagination }) => {
  const [result, setResult] = React.useState({
    items: [],
    isLoading: false,
    error: undefined,
  });
  const fetch = () => {
    setResult({ isLoading: true, items: [] });
    const subscription = DataStore.observeQuery(
      model,
      criteria,
      pagination
    ).subscribe(
      (snapshot) => setResult({ items: snapshot.items, isLoading: false }),
      (error) => setResult({ items: [], error, isLoading: false })
    );
    if (subscription) {
      return () => subscription.unsubscribe();
    }
  };
  React.useEffect(fetch, []);
  return result;
};
export const useDataStoreItem = ({ model, id }) => {
  const [item, setItem] = React.useState();
  const [isLoading, setLoading] = React.useState(false);
  const [error, setError] = React.useState();
  const fetch = () => {
    setLoading(true);
    DataStore.query(model, id)
      .then(setItem)
      .catch(setError)
      .finally(() => setLoading(false));
  };
  React.useEffect(fetch, []);
  return {
    error,
    item,
    isLoading,
  };
};
export function useDataStoreBinding(props) {
  return props.type === "record"
    ? useDataStoreItem(props)
    : useDataStoreCollection(props);
}
export const useAuthSignOutAction = (options) => async () => {
  try {
    Hub.dispatch(
      UI_CHANNEL,
      {
        event: ACTION_AUTH_SIGNOUT_STARTED,
        data: { options },
      },
      EVENT_ACTION_AUTH_SIGNOUT,
      AMPLIFY_SYMBOL
    );
    await signOut(options);
    Hub.dispatch(
      UI_CHANNEL,
      {
        event: ACTION_AUTH_SIGNOUT_FINISHED,
        data: { options },
      },
      EVENT_ACTION_AUTH_SIGNOUT,
      AMPLIFY_SYMBOL
    );
  } catch (error) {
    Hub.dispatch(
      UI_CHANNEL,
      {
        event: ACTION_AUTH_SIGNOUT_FINISHED,
        data: { options, errorMessage: getErrorMessage(error) },
      },
      EVENT_ACTION_AUTH_SIGNOUT,
      AMPLIFY_SYMBOL
    );
  }
};
export const useAuth = () => {
  const [result, setResult] = React.useState({
    error: undefined,
    isLoading: true,
    user: undefined,
  });
  const fetchCurrentUserAttributes = React.useCallback(async () => {
    setResult((prevResult) => ({ ...prevResult, isLoading: true }));
    try {
      const attributes = await fetchUserAttributes();
      setResult({ user: { attributes }, isLoading: false });
    } catch (error) {
      setResult({ error, isLoading: false });
    }
  }, []);
  const handleAuth = React.useCallback(
    ({ payload }) => {
      switch (payload.event) {
        case "signedIn":
        case "signUp":
        case "tokenRefresh":
        case "autoSignIn": {
          fetchCurrentUserAttributes();
          break;
        }
        case "signedOut": {
          setResult({ user: undefined, isLoading: false });
          break;
        }
        case "tokenRefresh_failure":
        case "signIn_failure": {
          setResult({ error: payload.data, isLoading: false });
          break;
        }
        case "autoSignIn_failure": {
          setResult({ error: new Error(payload.message), isLoading: false });
          break;
        }
        default: {
          break;
        }
      }
    },
    [fetchCurrentUserAttributes]
  );
  React.useEffect(() => {
    const unsubscribe = Hub.listen("auth", handleAuth, "useAuth");
    fetchCurrentUserAttributes();
    return unsubscribe;
  }, [handleAuth, fetchCurrentUserAttributes]);
  return {
    ...result,
  };
};
export const validateField = (value, validations) => {
  for (const validation of validations) {
    if (value === undefined || value === "" || value === null) {
      if (validation.type === "Required") {
        return {
          hasError: true,
          errorMessage: validation.validationMessage || "The value is required",
        };
      } else {
        return {
          hasError: false,
        };
      }
    }
    const validationResult = checkValidation(value, validation);
    if (validationResult?.hasError) {
      return validationResult;
    }
  }
  return { hasError: false };
};
export const parseDateValidator = (dateValidator) => {
  const isTimestamp =
    `${parseInt(dateValidator)}`.length === dateValidator.length;
  return isTimestamp ? parseInt(dateValidator) : dateValidator;
};
const checkValidation = (value, validation) => {
  if (validation.numValues?.length) {
    switch (validation.type) {
      case "LessThanChar":
        return {
          hasError: !(value.length <= validation.numValues[0]),
          errorMessage:
            validation.validationMessage ||
            `The value must be shorter than ${validation.numValues[0]} characters`,
        };
      case "GreaterThanChar":
        return {
          hasError: !(value.length > validation.numValues[0]),
          errorMessage:
            validation.validationMessage ||
            `The value must be longer than ${validation.numValues[0]} characters`,
        };
      case "LessThanNum":
        return {
          hasError: !(value < validation.numValues[0]),
          errorMessage:
            validation.validationMessage ||
            `The value must be less than ${validation.numValues[0]}`,
        };
      case "GreaterThanNum":
        return {
          hasError: !(value > validation.numValues[0]),
          errorMessage:
            validation.validationMessage ||
            `The value must be greater than ${validation.numValues[0]}`,
        };
      case "EqualTo":
        return {
          hasError: !validation.numValues.some((el) => el === value),
          errorMessage:
            validation.validationMessage ||
            `The value must be equal to ${validation.numValues.join(" or ")}`,
        };
      default:
    }
  } else if (validation.strValues?.length) {
    switch (validation.type) {
      case "StartWith":
        return {
          hasError: !validation.strValues.some((el) => value.startsWith(el)),
          errorMessage:
            validation.validationMessage ||
            `The value must start with ${validation.strValues.join(", ")}`,
        };
      case "EndWith":
        return {
          hasError: !validation.strValues.some((el) => value.endsWith(el)),
          errorMessage:
            validation.validationMessage ||
            `The value must end with ${validation.strValues.join(", ")}`,
        };
      case "Contains":
        return {
          hasError: !validation.strValues.some((el) => value.includes(el)),
          errorMessage:
            validation.validationMessage ||
            `The value must contain ${validation.strValues.join(", ")}`,
        };
      case "NotContains":
        return {
          hasError: !validation.strValues.every((el) => !value.includes(el)),
          errorMessage:
            validation.validationMessage ||
            `The value must not contain ${validation.strValues.join(", ")}`,
        };
      case "BeAfter":
        return {
          hasError: !(
            new Date(value) >
            new Date(parseDateValidator(validation.strValues[0]))
          ),
          errorMessage:
            validation.validationMessage ||
            `The value must be after ${validation.strValues[0]}`,
        };
      case "BeBefore":
        return {
          hasError: !(
            new Date(value) <
            new Date(parseDateValidator(validation.strValues[0]))
          ),
          errorMessage:
            validation.validationMessage ||
            `The value must be before ${validation.strValues[0]}`,
        };
    }
  }
  switch (validation.type) {
    case "Email":
      const EMAIL_ADDRESS_REGEX =
        /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*.?[a-zA-Z0-9])*.[a-zA-Z](-?[a-zA-Z0-9])+$/;
      return {
        hasError: !EMAIL_ADDRESS_REGEX.test(value),
        errorMessage:
          validation.validationMessage ||
          "The value must be a valid email address",
      };
    case "JSON":
      let isInvalidJSON = false;
      try {
        JSON.parse(value);
      } catch (e) {
        isInvalidJSON = true;
      }
      return {
        hasError: isInvalidJSON,
        errorMessage:
          validation.validationMessage ||
          "The value must be in a correct JSON format",
      };
    case "IpAddress":
      const IPV_4 =
        /^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$/;
      const IPV_6 =
        /^(?:(?:[a-fA-F\d]{1,4}:){7}(?:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,2}|:)|(?:[a-fA-F\d]{1,4}:){4}(?:(?::[a-fA-F\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,3}|:)|(?:[a-fA-F\d]{1,4}:){3}(?:(?::[a-fA-F\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,4}|:)|(?:[a-fA-F\d]{1,4}:){2}(?:(?::[a-fA-F\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,5}|:)|(?:[a-fA-F\d]{1,4}:){1}(?:(?::[a-fA-F\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,6}|:)|(?::(?:(?::[a-fA-F\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,7}|:)))(?:%[0-9a-zA-Z]{1,})?$/;
      return {
        hasError: !(IPV_4.test(value) || IPV_6.test(value)),
        errorMessage:
          validation.validationMessage ||
          "The value must be an IPv4 or IPv6 address",
      };
    case "URL":
      let isInvalidUrl = false;
      try {
        new URL(value);
      } catch (e) {
        isInvalidUrl = true;
      }
      return {
        hasError: isInvalidUrl,
        errorMessage:
          validation.validationMessage ||
          "The value must be a valid URL that begins with a schema (i.e. http:// or mailto:)",
      };
    case "Phone":
      const PHONE = /^\+?\d[\d\s-]+$/;
      return {
        hasError: !PHONE.test(value),
        errorMessage:
          validation.validationMessage ||
          "The value must be a valid phone number",
      };
    default:
  }
};
const monthToShortMon = {
  "1": "Jan",
  "2": "Feb",
  "3": "Mar",
  "4": "Apr",
  "5": "May",
  "6": "Jun",
  "7": "Jul",
  "8": "Aug",
  "9": "Sep",
  "10": "Oct",
  "11": "Nov",
  "12": "Dec",
};
const invalidDateStr = "Invalid Date";
export function formatDate(date, dateFormat) {
  if (date === undefined || date === null) {
    return date;
  }
  const validDate = new Date(Date.parse(date));
  if (validDate.toString() === invalidDateStr) {
    return date;
  }
  const splitDate = date.split(/-|\+|Z/);
  const year = splitDate[0];
  const month = splitDate[1];
  const day = splitDate[2];
  const truncatedMonth = month.replace(/^0+/, "");
  switch (dateFormat) {
    case "locale":
      return validDate.toLocaleDateString();
    case "YYYY.MM.DD":
      return `${year}.${month}.${day}`;
    case "DD.MM.YYYY":
      return `${day}.${month}.${year}`;
    case "MM/DD/YYYY":
      return `${month}/${day}/${year}`;
    case "Mmm DD, YYYY":
      return `${monthToShortMon[truncatedMonth]} ${day}, ${year}`;
    default:
      return date;
  }
}
export function formatTime(time, timeFormat) {
  if (time === undefined || time === null) {
    return time;
  }
  const splitTime = time.split(/:|Z/);
  if (splitTime.length < 3) {
    return time;
  }
  const validTime = new Date();
  validTime.setHours(Number.parseInt(splitTime[0], 10));
  validTime.setMinutes(Number.parseInt(splitTime[1], 10));
  const splitSeconds = splitTime[2].split(".");
  validTime.setSeconds(
    Number.parseInt(splitSeconds[0], 10),
    Number.parseInt(splitSeconds[1], 10)
  );
  if (validTime.toString() === invalidDateStr) {
    return time;
  }
  switch (timeFormat) {
    case "locale":
      return validTime.toLocaleTimeString();
    case "hours24":
      return validTime.toLocaleTimeString("en-gb");
    case "hours12":
      return validTime.toLocaleTimeString("en-us");
    default:
      return time;
  }
}
export function formatDateTime(dateTimeStr, dateTimeFormat) {
  if (dateTimeStr === undefined || dateTimeStr === null) {
    return dateTimeStr;
  }
  const dateTime = /^\d+$/.test(dateTimeStr)
    ? new Date(Number.parseInt(dateTimeStr, 10))
    : new Date(Date.parse(dateTimeStr));
  if (dateTime.toString() === invalidDateStr) {
    return dateTimeStr;
  }
  if (dateTimeFormat === "locale") {
    return dateTime.toLocaleString();
  }
  const dateAndTime = dateTime.toISOString().split("T");
  const date = formatDate(dateAndTime[0], dateTimeFormat.dateFormat);
  const time = formatTime(dateAndTime[1], dateTimeFormat.timeFormat);
  return `${date} - ${time}`;
}
export function formatter(value, formatterInput) {
  switch (formatterInput.type) {
    case "DateFormat":
      return formatDate(value, formatterInput.format);
    case "DateTimeFormat":
      return formatDateTime(value, formatterInput.format);
    case "TimeFormat":
      return formatTime(value, formatterInput.format);
    default:
      return value;
  }
}
export const fetchByPath = (input, path, accumlator = []) => {
  const currentPath = path.split(".");
  const head = currentPath.shift();
  if (input && head && input[head] !== undefined) {
    if (!currentPath.length) {
      accumlator.push(input[head]);
    } else {
      fetchByPath(input[head], currentPath.join("."), accumlator);
    }
  }
  return accumlator[0];
};
export const processFile = async ({ file }) => {
  const fileExtension = file.name.split(".").pop();
  return file
    .arrayBuffer()
    .then((filebuffer) => window.crypto.subtle.digest("SHA-1", filebuffer))
    .then((hashBuffer) => {
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray
        .map((a) => a.toString(16).padStart(2, "0"))
        .join("");
      return { file, key: `${hashHex}.${fileExtension}` };
    });
};
