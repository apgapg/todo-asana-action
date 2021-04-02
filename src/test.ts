import {createTask} from "./asana";
import {getAsanaUserId} from "./utils/asana_users_utils";

try {
  const username = "apgapg";
  const asanaToken = "---";
  const projectIds = ["1199123288499074"];
  const followersIds: string[] = [];
  const task = "[TODO] This is test task from TODO";
  const workspaceId = "34125054317482";
  const userId = getAsanaUserId(username);
  
  createTask(userId, task, asanaToken, projectIds, followersIds, workspaceId).then(r => console.log(r)).catch(
    e => console.error(e)
  );
} catch (e) {
  console.error(e);
}
